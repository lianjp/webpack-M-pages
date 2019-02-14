const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { htmlPages } = require("./pages");
const devMode = process.env.NODE_ENV !== "production";
console.log("devMode", devMode);

let htmlPagesArr = htmlPages();

const PLUGIN = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "static/css/[name].[hash].css",
    chunkFilename: "static/css/[id].[hash].css"
  })
];

/*遍历页面，添加配置*/
htmlPagesArr.forEach(page_config => {
  const htmlPlugin = new HtmlWebpackPlugin(page_config);
  PLUGIN.push(htmlPlugin);
});

module.exports = PLUGIN;
