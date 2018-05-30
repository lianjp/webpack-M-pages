const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [

    new HtmlWebpackPlugin({
      title: 'index'
    }),

    new ExtractTextPlugin({
      //生成css文件名
      filename: 'static/style/[name][hash].css',
      disable: false,
      allChunks: true
    })
  ],
  devServer: {
    contentBase: './dist'
  }
});