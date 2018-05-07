const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index'
    })
  ],
  output: {
    filename: "[name][hash].js",
    chunkFilename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};