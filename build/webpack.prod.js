const {merge} = require('webpack-merge')
const path = require('path')
const common = require("./webpack.common");

module.exports = merge(common,{
  entry: './src/lib/index.js',
  output:{
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'vue-backtop.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})