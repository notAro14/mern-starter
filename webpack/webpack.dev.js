// node
const path = require('path');
// webpack
const { merge } = require('webpack-merge');
const webpackCfgCommon = require('./webpack.config');

module.exports = () =>
  merge(webpackCfgCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: 'Google Chrome',
      hot: true,
      port: 4000,
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  });
