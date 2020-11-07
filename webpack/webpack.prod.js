// node
const path = require('path')
// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// webpack
const { merge } = require('webpack-merge')
const webpackCfgCommon = require('../webpack.config')

module.exports = () => {
  return merge(webpackCfgCommon, {
    // devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].[contenthash].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: false, importLoaders: 2 },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new OptimizeCssAssetsPlugin()],
      // runtimeChunk: {
      //   name: 'runtime',
      // },
      runtimeChunk: 'single',
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
  })
}
