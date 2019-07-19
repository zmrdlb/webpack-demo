// webpack.production.config.js

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
    return Merge(require('./webpack.common')(env), {
        devtool: 'source-map', //去掉可以减小文件体积
        mode: 'production', //这个会启用 UglifyJsPlugin
        output: {
            path: path.resolve(__dirname,"dist"),
            filename: "js/[name].[chunkhash].js",
            chunkFilename: 'js/[id].[chunkhash].js',
            sourceMapFilename: "js/[name].[chunkhash].map",
            /**
             * publicPath，根据简单的结果进行理解
             * 按照path以及其他设置, 资源分别放在dist下的: js, css, image, font等文件夹中
             * 那么当发布时，根目录设置为dist，那么访问页面index.html的时候，
             * 上面的assets资源的访问路径是 /js/...
             * 所以publicPath为'/'
             */
            publicPath: '/'
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.BannerPlugin('版权所有 zmrdlb'), //给打包后的代码添加版权声明
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
