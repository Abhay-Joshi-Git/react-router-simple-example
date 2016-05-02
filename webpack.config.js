module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: "./src",
        fileName: "bundle.js"
    },
    devServer : {
        inline: true,
        contentBase: './src',
        port: 8080,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};