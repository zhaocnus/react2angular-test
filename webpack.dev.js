'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'angular',
      'react2angular',
      'webpack/hot/dev-server'
    ],
    index: [
      './src/index.js',
      'webpack/hot/dev-server'
    ]
  },

  output: {
    path: './client/build',
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ]
};
