const {merge} = require('webpack-merge')
const path = require('path')
const common = require("./webpack.common");

module.exports = merge(common,{
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname,'../page'),
      publicPath: '/page/',
      filename: 'index.js'
    },
})