module.exports= {
	entry: './src/index.js',
	output: {
		path: __dirname ,
		filename: 'app/js/main.js'    //Bundle File which webpack makes.
	},
	devServer: {
		inline: true,
		port: 8083
	},
	module :{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
}