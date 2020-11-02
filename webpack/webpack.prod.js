const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const webpackCfgCommon = require('../webpack.config')

module.exports = () => {
  return merge(webpackCfgCommon, {
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          // styling
          test: /\.(css|scss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
  })
}
