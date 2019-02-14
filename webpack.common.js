const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { entriesPage } = require("./build/pages");
const PLUGIN = require("./build/plugins");

const devMode = process.env.NODE_ENV !== "production";

console.log("devmode", devMode);

module.exports = {
  entry: entriesPage(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // If you are having trouble with urls not resolving add this setting.
              // See https://github.com/webpack-contrib/css-loader#url
              url: false,
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader?attrs=img:src img:data-src"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "/static/img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "/static/fonts/[name].[ext]"
        }
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: PLUGIN,
  output: {
    filename: "static/js/[name][hash].js",
    chunkFilename: "static/js/[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};
