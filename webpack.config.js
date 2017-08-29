var webpack = require('webpack')

module.exports = {
	entry : './src/index.js',
	output: {
		filename: '[name].js',
		path    : '/dist'
	},
	module: {
		rules: [
			{
				test   : /\.(jsx|js)$/,
				use    : [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/,
			},
		]
	}
}