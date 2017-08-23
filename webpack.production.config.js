// webpack.production.config.js

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = Merge(CommonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "js/[name].[chunkhash].js",
        sourceMapFilename: "js/[file].map", // string
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production') //'"production"'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('css/[name].[contenthash].css')
    ],
});
