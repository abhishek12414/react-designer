/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'examples/index.html'),
	filename: './index.html',
});

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'examples/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	// devtool: 'source-map',
	devServer: {
		port: 4008,
		hot: true,
		open: true,
		historyApiFallback: true,
		client: {
			overlay: true,
			progress: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(s(a|c)ss)$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(ico|gif|png|jpe?g|svg|)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
			// {
			// 	test: /\.(woff|woff2|eot|ttf)$/,
			// 	use: {
			// 		loader: 'url-loader',
			// 	},
			// },
		],
	},
};
