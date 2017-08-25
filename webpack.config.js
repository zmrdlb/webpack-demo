const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(CommonConfig, {
  devtool: 'eval-source-map', //source-map配置。
  output: {
    path: path.resolve(__dirname,"public"), //打包后的文件存放的地方
    filename: "js/[name].bundle.js", //打包后输出文件的文件名
    publicPath: '/'
    // chunkFilename: '[name].bundle.js'
  },

  /**
   * 开启本地开发服务器。
   * 浏览器监听代码修改，并自动刷新显示修改后的结果
   *
   * 当修改Greeter.js，重新编译生成main.js，index.html页面自动刷新
   */
  devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true, //实时刷新
      hot: true
  },

   /**
    * 插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
    * Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，
    * loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个，
    * 插件并不直接操作单个文件，它直接对整个构建过程起作用。
    */
   plugins: [
       new CleanWebpackPlugin(['public']), //先清理public文件夹
       new webpack.HotModuleReplacementPlugin()//热加载插件
   ]
});
