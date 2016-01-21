'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	context: path.resolve('./src/client/app'),
	entry: {
		vendor: [
			'angular', 'angular-animate', 'angular-sanitize',
			'angular-resource', 'angular-cookies', 'angular-ui-router',
			'angular-ui-bootstrap', 'bootstrap-loader', 'font-awesome-webpack'
		],
		app: './core/bootstrap.js'
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
		new OpenBrowserPlugin()
	],
	devServer: {
		contentBase: 'src/client'
	},
	devtool: 'inline-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loader: 'file-loader?name=images/[name].[ext]&context=./src/client/images'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', '!css-loader?sourceMap!postcss-loader!less-loader?sourceMap')
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')
			},
			{test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff' },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream' },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml' }
		]
	},
	resolve: {
		extensions: ['', '.js'],
		moduleDirectories: [
			'node_modules'
		]
	},
	postcss: [autoprefixer],
}
