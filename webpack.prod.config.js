var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  
  entry: [
    './src/index.js'
  ],
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.min.js'
  },
  
  devtool: '#sourcemap',
  
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
  
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    },
      
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css', 'resolve-url', 'sass')
    },
      
    {
      test: /\.woff$/,
      loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    },
      
    { test: /\.[ot]tf$/,
      loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
    },
      
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rogue Dungeon Explorer',
      inject: 'body',
    }),
    new ExtractTextPlugin("style.css")
  ]
  
};
