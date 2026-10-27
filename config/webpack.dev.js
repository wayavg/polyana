const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dev_build')
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: path.resolve(__dirname, '../dev_build')
  }
})
