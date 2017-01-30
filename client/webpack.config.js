var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.jsx",
    reactBundle: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "redux",
      "redux-thunk",
      "redux-promise-middleware"
    ]
  },
  output: {
    path: "../public/dist",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(gif|png|woff|woff2|eot|ttf|svg)$/, loader: "file-loader?name=assets/[name]-[hash:6].[ext]&publicPath=/dist/" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["reactBundle"]
    })
  ]
};
