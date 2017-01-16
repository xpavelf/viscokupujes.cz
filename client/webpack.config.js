var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.jsx"
  },
  output: {
    path: "../public/dist",
    filename: "[name].js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(gif|png|woff|woff2|eot|ttf|svg)$/, loader: "file-loader?name=assets/[name]-[hash:6].[ext]&publicPath=dist/" }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: ".",
      manifest: require("../public/dist/lib/react.dll.json")
    })
  ]
};
