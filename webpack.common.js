const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var _prod = process.env.NODE_ENV == 'production';

var cssRule = {
      test: /\.less$/,
      use: [ //链式调用从下到上
          "style-loader",
          {
              loader: "css-loader",
              // 如果不使用less-loader,并且使用局部css声明使用。如果使用less-loader，用这个功能有问题
            //   options: {
            //       modules: true
            //   }
          },
          "postcss-loader", //postcss: http://postcss.org/ 使用js翻译css的工具
          "less-loader"
      ]
 };

 if(_prod){
     console.log('生产环境');
     cssRule = {
           test: /\.less$/,
           use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: [ //链式调用从下到上
                   {
                       loader: "css-loader",
                       options: {
                           sourceMap: true,
                           minimize: true
                       }
                   },{
                       loader: 'postcss-loader',
                       options: {
                           sourceMap: true
                       }
                   }, //postcss: http://postcss.org/ 使用js翻译css的工具
                   {
                       loader: "less-loader",
                       options: {
                           sourceMap: true
                       }
                   }
               ]
           })
     };
 }

var that = {
  entry: {
      index: './app/index/index.js',
      another: './app/another/index.js',
      vendor: [
          'react',
          'react-dom'
      ]
  },

  resolve: {
      alias: {
          "comp": path.resolve(__dirname,"components")
      }
  },

  //loader 翻译文件变成浏览器可识别的。
  module: {
      rules: [{
            test: /\.(jsx|js)$/,
            loader: "babel-loader",
            exclude: /node_modules/
      },
      cssRule,
      { //加载图片
           test: /\.(png|svg|jpg|gif)$/,
           use: [{
               loader: 'url-loader',
               options: {
                   limit: 8192, //文件小于此字节则返回data-url
                //    name: '[hash].[ext]',
                   outputPath: 'image/', //文件输出路径
                //    publicPath: '/' // 此时文件路径是 outputPath+name，因为output已经设置了publicPath，所以此处不用
               }
           }]
       },{ //加载字体
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [{
               loader: 'file-loader',
               options: {
                //    name: '[hash].[ext]',
                   outputPath: 'font/',
                //    publicPath: '/'
               }
           }]
       }]
   },

   /**
    * 插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
    * Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，
    * loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，
    * 插件并不直接操作单个文件，它直接对整个构建过程起作用。
    */
   plugins: [
       new webpack.BannerPlugin('版权所有 zmrdlb'), //给打包后的代码添加版权声明
       //多页应用实例 MPA
    //    new HtmlWebpackPlugin({
    //        chunks: ['runtime','vendor','index'],
    //        template: './app/index.tmpl.html',
    //        filename: 'index.html'
    //    }),
    //    new HtmlWebpackPlugin({
    //        chunks: ['runtime','vendor','another'],
    //        template: './app/another.tmpl.html',
    //        filename: 'another.html'
    //    }),
       //单页应用 SPA
       new HtmlWebpackPlugin({
           template: './app/index.spa.tmpl.html',
           filename: 'index.html',
           minify: _prod? {
                removeComments: true,
                collapseWhitespace: true
           }: false
       }),
       //将entry中声明的vendor提取到单独的vendor文件中
       new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor',
           minChunks: Infinity
       }),
       //将index.js和another-module.js里公共的部分，提取到runtime.bundle.js
       new webpack.optimize.CommonsChunkPlugin({
           name: 'runtime', // Specify the common bundle's name.
           minChunks: Infinity
       })
       //提取entry文件的公共部分
    //    new webpack.optimize.CommonsChunkPlugin({
    //        name: 'common'
    //    })
   ]
};

if(_prod){
    that.plugins.push(new ExtractTextPlugin('css/[name].[contenthash].css'))
}

module.exports = that;
