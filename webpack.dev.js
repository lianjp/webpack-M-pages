const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [

    new HtmlWebpackPlugin({
      "filename": "index.html",
      "template": "./index.html",
      "chuckName": "index",
      "chunks": ['index']
    }),
  ],
  devServer: {
    contentBase: './dist'
  }
});