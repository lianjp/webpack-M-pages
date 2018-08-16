const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [

    new HtmlWebpackPlugin({
      title: 'index'
    }),
  ],
  devServer: {
    contentBase: './dist'
  }
});