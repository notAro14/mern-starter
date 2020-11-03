const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const webpackCfgCommon = require('../webpack.config')

module.exports = () => {
  return merge(webpackCfgCommon, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
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
      runtimeChunk: {
        name: 'runtime',
      },
    },
  })
}
