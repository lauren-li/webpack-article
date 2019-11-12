// import the node path api
const path = require('path');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = {
    mode: 'development',
    // change the entry file to be called "app.js"
    entry: './src/app.js',
    // change the output to "dist/out .bundle.js"
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'output.bundle.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new ProgressPlugin(), // built-in plugin in webpack
        new HtmlWebpackPlugin({ // our installed plugin
            template: 'index.html'
        })
    ]
}

module.exports = webpack;