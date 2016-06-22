module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  externals: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
