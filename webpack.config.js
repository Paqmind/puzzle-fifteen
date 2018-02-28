module.exports = {
    entry: './src/Game.jsx',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}