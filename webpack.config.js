const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
