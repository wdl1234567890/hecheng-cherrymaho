const webpackMerge = require('webpack-merge')
const baseCofig = require('./base.config')
module.exports = webpackMerge(baseCofig,{
  devServer:{
    contentBase:'./dist',
    inline:true,
    open:true
  }
})