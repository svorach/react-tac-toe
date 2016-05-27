const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildDirectory = './dist/';

module.exports = {
  entry: "./src/App.jsx",
  devtool: 'source-map',
  output: {
    path: path.resolve(buildDirectory),
    filename: "build.js",
    publicPath: 'http://localhost:1337/dist'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: __dirname + '/src'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: __dirname + '/src/styles',
        loaders: [
          'style',
          'css',
          'sass?outputStyle=expanded'
        ]
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 1337,
    historyApiFallback: true
  }
};