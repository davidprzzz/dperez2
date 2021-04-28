const merge = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'development',
  devtool: false,
  devServer: {
    open: true
  }
}

module.exports = merge(common, dev)
