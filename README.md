# webpack-demo
webpack学习使用。有的学习总结直接写在了代码里了。

# 版本说明

- master：跟踪研究webpack最新版本
- webpack-demo-3-version: webpack version is 3

# .babelrc

## [babel-preset-env](http://babeljs.io/docs/en/babel-preset-env)

> 浏览器对比设置：["last 2 Chrome versions"]和["last 2 versions", "ie >= 8"]

- "targets.browsers": 使用了[browserslist](https://github.com/browserslist/browserslist)。默认配置是"> 0.5%, last 2 versions, Firefox ESR, not dead", 可设置"浏览器对比设置"来重新npm run build，对比dist/js中的文件大小。

- "useBuiltIns": 设置为true时，将browsers设置为"浏览器对比设置", 重新编译，对比venders.js里面对polyfill引入的数量不同。
