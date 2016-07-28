module.exports= {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'    //Bundle File which webpack makes.
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module :{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015','react']
			}
		}]
	}
}