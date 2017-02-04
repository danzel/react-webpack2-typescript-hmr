var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		'./index.tsx'
	],
	output: {
		filename: '[name].[chunkhash:8].js',
		publicPath: "",
		path: path.resolve(__dirname, "dist")
	},
	context: path.resolve(__dirname, 'src'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'json', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
			},
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].[contenthash:8].css"),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'index.html'
		}),
	]
};