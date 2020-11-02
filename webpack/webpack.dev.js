const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const webpackCfgCommon = require('../webpack.config')

module.exports = () =>
  merge(webpackCfgCommon, {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },

    module: {
      rules: [
        // styling
        {
          test: /\.(css|scss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
    ],
  })
