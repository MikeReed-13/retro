const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'application.bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html'
        })
    ]
};