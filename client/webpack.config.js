const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/app.jsx"
  },
  output: {
    path: __dirname + "/../www/dist",
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      __APP_MODE__: JSON.stringify(process.env.ENV_APP_MODE || 'web')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: '../index.html',
      __APP_MODE__: process.env.ENV_APP_MODE || 'web',
      inject: false
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(gif|png|woff|woff2|eot|ttf|svg|jpg)$/, loader: "file-loader?name=assets/[name]-[hash:6].[ext]&publicPath=dist/" }
    ]
  }
}
