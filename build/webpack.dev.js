const {merge} = require("webpack-merge");
const path = require('path')
const common = require("./webpack.common");
const webpack = require('webpack')

module.exports = merge(common,
{
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'./page'),
    publicPath: '/page/',
    filename: 'build.js'
  },
  devServer:{
    port: 1008,
    contentBase: './page'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})