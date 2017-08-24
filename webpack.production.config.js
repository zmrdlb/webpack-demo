// webpack.production.config.js

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Merge(CommonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "js/[name].[chunkhash].js",
        sourceMapFilename: "js/[name].[chunkhash].map"
        // chunkFilename: 'js/[id].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production') //'"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
            // ie8: true //支持ie8
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
});
