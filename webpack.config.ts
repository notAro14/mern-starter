import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-474628163
interface Configuration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}
// configuration
const mode = isDev ? 'development' : 'production';
const devtool = isDev ? 'inline-source-map' : 'source-map';
const devServer: webpackDevServer.Configuration = {
  contentBase: path.resolve(__dirname, 'dist'),
  historyApiFallback: true,
  hot: true,
  port: 4000,
  proxy: {
    '/api': 'http://localhost:4001',
  },
  publicPath: '/assets/',
};
const plugins = [
  // html-webpack-plugin throws a warning DEP_WEBPACK_COMPILATION_ASSETS
  // See this issue https://github.com/jantimon/html-webpack-plugin/issues/1523
  // new CleanWebpackPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    title: 'Webpack Boilerplate for React',
    favicon: path.resolve(__dirname, 'src', 'public', 'images', 'favicon.png'),
    template: path.resolve(__dirname, 'src', 'public', 'template.html'),
    filename: 'index.html',
    alwaysWriteToDisk: true,
  }),
  new HtmlWebpackHarddiskPlugin(),
];

const config: Configuration = {
  entry: path.resolve(__dirname, 'src', 'index'),
  mode,
  devtool,
  devServer,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/assets/',
  },
  plugins: isDev
    ? plugins
    : [
        ...plugins,
        new MiniCssExtractPlugin({
          filename: 'styles/[name].[contenthash].css',
        }),
      ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(css|scss)$/i,
        use: isDev
          ? ['style-loader', 'css-loader', 'sass-loader']
          : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

export default config;
