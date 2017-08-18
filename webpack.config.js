const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //source-map配置
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  /**
   * 开启本地开发服务器。
   * 浏览器监听代码修改，并自动刷新显示修改后的结果
   *
   * 当修改Greeter.js，重新编译生成bundle.js，index.html页面自动刷新
   */
  devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true, //实时刷新
      hot: true
  },

  //loader 翻译文件变成浏览器可识别的。
  module: {
      rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/
      },{
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader" //postcss: http://postcss.org/ 使用js翻译css的工具
                }
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
       new webpack.BannerPlugin('版权所有，翻版必究'), //给打包后的代码添加版权声明
       new HtmlWebpackPlugin({
           template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
       }),
       new webpack.HotModuleReplacementPlugin()//热加载插件
   ]
}
