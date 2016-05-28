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
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 1337,
    historyApiFallback: true
  }
};