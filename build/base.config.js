const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:'bundle.js'
	},
	plugins: [
	  new VueLoaderPlugin(),
	  new webpack.BannerPlugin('版权归茯苓所有'),
    new htmlWebpackPlugin({
      template:'index.html'
    })
	],
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name:'image/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['es2015']
	        }
	      }
	    },
	    {
	    	test: /\.vue$/,
	    	use:['vue-loader']
	    }
    ]
  },
  resolve:{
  	extensions:['.js','.vue'],
  	alias:{
  		'vue$':'vue/dist/vue.esm.js'
  	}
  }
}