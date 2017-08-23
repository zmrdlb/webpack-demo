const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
      },{
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },
                "postcss-loader" //postcss: http://postcss.org/ 使用js翻译css的工具
            ]
       },{ //加载图片
           test: /\.(png|svg|jpg|gif)$/,
           use: [
               'file-loader'
           ]
       },{ //加载字体
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
               'file-loader'
           ]
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
       new HtmlWebpackPlugin({
           chunks: ['runtime','vendor','index'],
           template: './app/index.tmpl.html',
           filename: 'index.html'
       }),
       new HtmlWebpackPlugin({
           chunks: ['runtime','vendor','another'],
           template: './app/another.tmpl.html',
           filename: 'another.html'
       }),
       //将entry中声明的vendor提取到单独的vendor文件中
       new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor' // Specify the common bundle's name.
       }),
       //将index.js和another-module.js里公共的部分，提取到runtime.bundle.js
       new webpack.optimize.CommonsChunkPlugin({
           name: 'runtime' // Specify the common bundle's name.
       })
   ]
}
