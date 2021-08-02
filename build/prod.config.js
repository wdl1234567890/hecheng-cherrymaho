const webpackMerge = require('webpack-merge')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const baseCofig = require('./base.config')
module.exports = webpackMerge(baseCofig,{
  plugins: [
    //new uglifyjsWebpackPlugin()
  ]
})