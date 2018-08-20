// webpack.production.config.js

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    return Merge(require('./webpack.common')(env), {
        devtool: 'source-map', //去掉可以减小文件体积
        mode: 'production', //这个会启用 UglifyJsPlugin
        output: {
            path: path.resolve(__dirname,"dist"),
            filename: "js/[name].[chunkhash].js",
            chunkFilename: 'js/[name].[chunkhash].js',
            sourceMapFilename: "js/[name].[chunkhash].map",
            publicPath: '/'
            //pathinfo: false //关闭在文件中生成路径信息
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.BannerPlugin('版权所有 zmrdlb'), //给打包后的代码添加版权声明
            // 原来在npm build中添加了：cross-env NODE_ENV=production PLATFORM=web
            // new webpack.DefinePlugin({
            //     'process.env.NODE_ENV': JSON.stringify('production') //'"production"'
            // }),
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
}
