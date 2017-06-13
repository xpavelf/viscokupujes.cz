var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.jsx"
  },
  output: {
    path: __dirname + "/../www/dist",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(gif|png|woff|woff2|eot|ttf|svg|jpg)$/, loader: "file-loader?name=assets/[name]-[hash:6].[ext]&publicPath=/dist/" }
    ]
  }
};
