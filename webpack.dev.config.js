const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	
	entry: [
		'./src/index.js'
	],
	
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1', 'react-hmre']
				}
			},
			
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass']
			},
			
			{
				test: /\.woff$/,
				loader: 'url?limit=65000&mimetype=application/font-woff'
			},
			
			{ test: /\.[ot]tf$/,
				loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			}],
	},
	
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	
	postcss: [
	  autoprefixer({ browsers: ['last 2 versions'] })
	],
	
	resolve: {
		extensions: ['', '.js', '.jsx','.scss', '.css', 'woff', 'tff']
	},
	
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	
	plugins: [
		new HtmlWebpackPlugin({
				title: 'Rogue Dungeon Explorer',
				inject: 'body'
			}),
		new webpack.ProvidePlugin({
			"React": "react",
		}),
	]
	
};
