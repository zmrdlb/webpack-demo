const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

module.exports = env => {

    var _prod = env && env.production;

    if(env){
        console.log('NODE_ENV: ', env.NODE_ENV);
        console.log('Production: ', env.production);
    }

    console.log(_prod? 'production': 'development');

    //这里取不到，是development
    console.log(`process.env.NODE_ENV的值是${process.env.NODE_ENV}`);

    var cssRule = {
          test: /\.less$/,
          use: [ //链式调用从下到上
              _prod? MiniCssExtractPlugin.loader: "style-loader",
              {
                  loader: "css-loader",
                  options: {
                      // 如果不使用less-loader,并且使用局部css声明使用。如果使用less-loader，用这个功能有问题
                      //modules: true
                      //将类名转化为驼峰，并且删除原来的命名
                      camelCase: 'only',
                      //development模式下，添加sourceMap，编译调试
                      sourceMap: !_prod
                  }
              },
              "postcss-loader", //postcss: http://postcss.org/ 使用js翻译css的工具
              "less-loader"
          ]
     };

    //  if(_prod){
    //      cssRule = {
    //            test: /\.less$/,
    //            use: ExtractTextPlugin.extract({
    //                fallback: "style-loader",
    //                use: [ //链式调用从下到上
    //                    {
    //                        loader: "css-loader",
    //                        options: {
    //                            sourceMap: true,
    //                            minimize: true
    //                        }
    //                    },{
    //                        loader: 'postcss-loader',
    //                        options: {
    //                            sourceMap: true
    //                        }
    //                    }, //postcss: http://postcss.org/ 使用js翻译css的工具
    //                    {
    //                        loader: "less-loader",
    //                        options: {
    //                            sourceMap: true
    //                        }
    //                    }
    //                ]
    //            })
    //      };
    //  }

    var that = {
      entry: {
          index: path.join(paths.src,'entry/index/index.js'),
          another: path.join(paths.src,'entry/another/index.js')
        //   vendor: [
        //       'react',
        //       'react-dom'
        //   ]
      },

      resolve: {
          alias: {
              "comp": path.resolve(__dirname,"src/components"),
              "common": path.resolve(__dirname,"src/common"),
              "async": path.resolve(__dirname,"src/async")
          }
      },

      optimization: {
          /**
           * 设置chunks分割的规则。通常用来做code-splitting
           * @type {Object}
           */
          splitChunks: {
              //默认minSize是30KB。也就是说，生成的每一个chunk至少得是30KB。
              //如果生成的chunk小于30KB, 就算你在cacheGroups里设置了commons和async的提取，也不会提取公共的。
              //此时，你可以看到index和another里对code-splitting都各自生成了一套代码; detail和list里对dynamic-common
              //也各自生成了一套代码。因为拆分过多会造成更多的请求，所以故做此minSize限制。
              //
              //实际过程中，代码量肯定很多，不会小于30KB。此处设置成1是为了测试。
              minSize: 1,
              cacheGroups: {
                  //将用到的package都合并到vendors
                  vendors: {
                      test: /[\\/]node_modules[\\/]/i, //匹配 /node_modules/
                      name: "vendors",
                      chunks: "all",
                      priority: 0
                  },
                  //将entry points的公共代码提取到commons中
                  commons: {
                      name: 'commons',
                      chunks: 'initial',
                      priority: -1
                  }
                  /**
                   * 将dynamic导入的js的公共部分提取到一起
                     这块设置与否都不会有所影响。因为splitChunks.cacheGroups.default默认设置是：
                       default: {
                           minChunks: 2,
                           priority: -20,
                           reuseExistingChunk: true
                       }
                       chunks是继承的splitChunks.chunks，‘async’
                   */
                //   async: {
                //       //name: 'async', 如果指定name，则import引入的module都会合并到async.[chunkhash].js
                //       chunks: 'async',
                //       priority: -2
                //   }
              }
          },
          runtimeChunk: 'single'
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
           //多页应用实例 MPA
        //    new HtmlWebpackPlugin({
        //        chunks: ['runtime','vendor','index'],
        //        template: path.join(paths.src,'index.tmpl.html'),
        //        filename: 'index.html'
        //    }),
        //    new HtmlWebpackPlugin({
        //        chunks: ['runtime','vendor','another'],
        //        template: path.join(paths.src,'another.tmpl.html'),
        //        filename: 'another.html'
        //    }),
           //单页应用 SPA
           new HtmlWebpackPlugin({
               template: path.join(paths.src,'index.spa.tmpl.html'),
               filename: 'index.html',
               minify: _prod? {
                    removeComments: true,
                    collapseWhitespace: true
               }: false
           }),
           new MiniCssExtractPlugin({
                filename: _prod? 'css/[name].[contenthash].css': 'css/[name].css',
                chunkFilename: _prod? 'css/[id].[contenthash].css': 'css/[id].css',
           })
           // process.env.NODE_ENV的值，默认由optimization.nodeEnv设置，取自mode值
        //    new webpack.DefinePlugin({
        //        'process.env.NODE_ENV': JSON.stringify(_prod? 'production': 'development') //'"production"'
        //    })
       ]
    };

    return that;
}
