var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './app/app.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }



        ]
    }
};

module.exports = config;
