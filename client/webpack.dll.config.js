var webpack = require("webpack");
var outputPath = "../public/dist/lib/";
module.exports = {
  entry: {
    react: [
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "redux-thunk",
      "redux-promise-middleware"
    ]
  },
  output: {
    filename: "[name].dll.js",
    path: outputPath,
    library: "[name]"
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: true
    //   }
    // }),
    new webpack.DllPlugin({
      name: "[name]",
      path: `${outputPath}[name].dll.json`
    })
  ]
};
