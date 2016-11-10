var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    merge = require('webpack-merge'),
    common = require('./webpack.config');

var sass = new ExtractTextPlugin({
    filename: "app.css",
    allChunks: true
});

var specific = {

    resolve: {
        alias: {
            API: path.join(__dirname, 'API.prod'),
        }
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: sass.extract(['css', 'sass'])
        }, {
            test: /\.css$/,
            loaders: sass.extract(['css'])
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        sass
    ],

    output: {
        publicPath: '/employees/',
        path: path.join(__dirname, '../../server/EmpDirectory')
    }
};

module.exports = merge(common, specific);
