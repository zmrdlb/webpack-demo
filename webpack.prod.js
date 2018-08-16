// webpack.production.config.js

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = Merge(CommonConfig, {
    devtool: 'source-map',
    mode: 'production', //这个会启用 UglifyJsPlugin
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/[name].[chunkhash].js",
        chunkFilename: 'js/[name].[chunkhash].js',
        sourceMapFilename: "js/[name].[chunkhash].map",
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.HashedModuleIdsPlugin(),
        // 原来在npm build中添加了：cross-env NODE_ENV=production PLATFORM=web
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production') //'"production"'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        //     // ie8: true //支持ie8
        // }),
        new webpack.optimize.OccurrenceOrderPlugin()
        //https://github.com/webpack-contrib/webpack-bundle-analyzer
        //可视化分析
        //new BundleAnalyzerPlugin()
    ],
});
