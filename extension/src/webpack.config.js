module.exports = {
	entry: __dirname + '/src',
	output: {
		path: '/'
	},
	devtool: 'source-maps',
	module: {
		loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
		rules: [
			{
				test: /\.jsx?$/,
	            exclude: /(node_modules)/,
	            loader: 'webpack-atomizer-loader?configPath=' + __dirname + '/atomCssConfig.js!babel-loader',
			}
		]
	}
}