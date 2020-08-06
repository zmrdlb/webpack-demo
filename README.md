# webpack-demo
webpack学习使用。有的学习总结直接写在了代码里了。

# 版本说明

- master：跟踪研究webpack最新版本
- webpack-demo-3-version: webpack version is 3
- webpack-demo-pwa: 基于webpack构建pwa应用

# babel config

在 babel.config.js 中配置。

有时我们使用的API及语法，浏览器不支持。幸亏，babel 提供了很多 helper code, 根据配置及环境自动编译，让我们无缝使用新的 js 语法。babel helper code 包括两部分：polyfill ([corejs](https://github.com/zloirock/core-js))，如 Promise, Map；babel modular runtime helper ([@babel/runtime](https://www.babeljs.cn/docs/babel-runtime))，如对 Class 语法重写。

## [@babel/preset-env](http://babeljs.io/docs/en/babel-preset-env)

- "useBuiltIns": 基于设置的环境（如 .browserslistrc），配置 @babel/preset-env 如何处理 polyfills。通过修改 test.js 并运行 npx babel test.js -o test.compile.js 来进行测试。为了测试结果只管，先将 babel.config.js 里面 @babel/plugin-transform-runtime 配置注释掉。更多说明请查看 test.js。
  - "entry": 在整个app里只使用一次 import "core-js" 和 import "regenerator-runtime/runtime"。根据环境，将 "core-js" 和 "regenerator-runtime/runtime" 所涉及到的单独的 module 都导入进来，并替换它们。就算代码里面实际只用到了 Promise 也会导入其他 module。
  - "usage": 根据环境，以及 test.js 里代码涉及到 polyfills 来导入所需的 module。

## [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

一般情况下，babel helper code 是被内联注入的，这会造成全局环境污染，以及代码重复。该 plugin 便解决了这个问题，将内联注入的代码替换为独立的 module。
> 因为 `@babel/runtime` 提供了 `regenerator-runtime/runtime` 的实现 `@babel/runtime/regenerator`，且 `@babel/plugin-transform-runtime` 会自动识别当代码中使用了 generator 和 async function 会自动引入 @babel/runtime/regenerator。所以不需要在代码中手动引入 `regenerator-runtime/runtime`。

# [browserslist](https://github.com/browserslist/browserslist)

在 .browserslistrc 中配置。

配置所支持的浏览器环境，默认配置是"> 0.5%, last 2 versions, Firefox ESR, not dead", 可在.browserslistrc中设置"浏览器对比设置"，编译test.js来测试。
> 浏览器对比设置：["last 2 Chrome versions"]和["last 2 versions", "ie >= 8"]。在.browserslistrc中配置时，将数组中的每条数据去了,换行写即可。

# package.json

- [sideEffects](https://webpack.docschina.org/guides/tree-shaking/#mark-the-file-as-side-effect-free): 这个设置看文档就知道干啥了。但是有个注意的是，代码压缩了才能去除不需要的代码，所以npm run build在dist里面查看commons.js,才能够看出来。

# 获取环境变量

- 只有设置了 `cross-env NODE_ENV=production PLATFORM=web` 或 `cross-env NODE_ENV=development PLATFORM=web`， 在webpack.common.js 和 babel.config.js 中才可以取到 `process.env.NODE_ENV` 的值，否则就是 `undefined`。
- npm run build: 使用[webpack官方环境变量设置](https://webpack.docschina.org/guides/environment-variables/)。在这里设置了 `--env.NODE_ENV=production`，但访问 `process.env.NODE_ENV` 还是 `undefined`。
- [webpack.DefinePlugin](https://webpack.docschina.org/plugins/define-plugin/): 这个插件是设置一个全局变量，这个全局变量是在代码里面访问，而不是在webpack.config.js中访问。所以查看webpack.common.js中此插件的使用，虽然设置了`'process.env.NODE_ENV': JSON.stringify(_prod? 'production': 'development')`, 但是运行npm start后，在代码里面可以访问到值，但是在webpack.common.js中打印出来的process.env.NODE_ENV的值是undefined。不过如果是设置在代码中可访问的`process.env.NODE_ENV`的值，可以不用再声明使用`webpack.DefinePlugin`了，因为此值默认由`optimization.nodeEnv`使用`webpack.DefinePlugin`设置，值取自`mode`。只要设置了`mode`即可。

# 核心概念

## runtime和manifest

在webpack打包过程中，每一个文件都会转换成模块函数(module function)

- [runtime](https://webpack.docschina.org/concepts/manifest/#runtime): 在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。这里要说明的是，runtime文件只针对entry point生成。

- [manifest](https://webpack.docschina.org/concepts/manifest/#manifest): 一旦你的应用程序中，形如 index.html 文件、一些 bundle 和各种资源加载到浏览器中，会发生什么？你精心安排的 /src 目录的文件结构现在已经不存在，所以 webpack 如何管理所有模块之间的交互呢？这就是 manifest 数据用途的由来…… 当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。

说白了，runtime里面包含manifest数据:

  - chunk的映射关系
  - 当entry point加载成功后，调用window["webpackJsonp"].push方法，此方法对应webpackJsonpCallback。在里面获取了deferredModules，包含了需要立马执行的module id集合。调用checkDeferredModules -> __webpack_require__ -> 调用module function并生成module object存储在installedModules。调用module function的时候，注意最后一个参数hotCreateRequire(moduleId)，这个对于加载并初始化dynamic script至关重要。而hotCreateRequire(moduleId)返回的则是webpack_require。webpack_required返回类似于__webpack_require__的结构，并调用__webpack_require__的方法。
  - 当dynamic script加载成功后，调用window["webpackJsonp"].push方法，此方法对应webpackJsonpCallback。在里面获取了moreModules，包含了此chunk打包的所有模块函数，包括自己。将moreModules存储到modules中。(还不知道怎么过渡过来的，与hotCreateRequire有关)__webpack_require__.e调用installedChunks中存储的异步加载对象请求异步的chunk。当chunk加载成功以后，里面调用了window["webpackJsonp"].push方法，这个时候调用了webpackJsonpCallback方法，设置installedChunks[chunkId] = 0;表示加载成功，调用了resolves.shift()();通知hot，(这期间没搞清楚怎么调用到此处的)调用__webpack_require__，生成module object。

深入理解webpack工作流程，可参见：https://blog.csdn.net/lancewu0907/article/details/76513231/

# webpack config

## [缓存](https://webpack.docschina.org/guides/caching/)

这块主要是借助[chunkhash]。chunkhash是与文件相关的hash。已经试过，运行npm run build，如果文件内容没改变，生成的静态资源的[name],[id],[chunkhash]也没改变。这就可以把不常更改的文件提取到一起，增强浏览器缓存。

## optimization

### [runtimeChunk](https://webpack.docschina.org/configuration/optimization/#optimization-runtimechunk)

设置了entry point的runtime代码的提取行为。

runtimeChunk的选项说明：

- false(default): 每一个entry point都生成了自己的runtime
- object
  ``` javascript
  runtimeChunk: {
     name: entrypoint => `runtimechunk~${entrypoint.name}`
  }
  ```
  为每一个entry point都生成了一个runtime文件，并指定其命名
  ``` javascript
  runtimeChunk: {
     name: 'vendors'
  }
  ```
  将所有entry point的runtime都添加到vendors.js文件中
- true: 为每一个entry point都生成了一个runtime文件，命名规则同`runtimechunk~${entrypoint.name}`
- 'single': 将所有entry point的runtime都提取到一个文件runtime.js中
- 'multiple': 同true

# analyze

对生成的stat.json进行性能分析，[官方工具](https://webpack.github.io/analyse/)

# PWA

progressive web app, 在分支webpack-demo-pwa实现

## workbox

### workbox.cacheableResponse.Plugin
  - statuses必须填写，虽然官方说有默认值，但是不填写取到的是undefined。
  - headers针对的是Response headers。
### [workbox.routing.registerRoute](https://developers.google.com/web/tools/workbox/modules/workbox-routing)
  - 默认情况下，拦截的是GET请求。如果想拦截其他method，则需要特别指出。
  - 声明的顺序很重要。
  - 正则表达式默认匹配same-origin，如果想匹配cross-origin，则需要在声明正则时指出beginning of URL。如：
  ```
  new RegExp('https://cdn.third-party-site.com.*/styles/.*\.css')
  ```
### [NavigationRoute](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.routing.NavigationRoute)

workbox.routing.registerNavigationRoute 方法实际上实例化了NavigationRoute。NavigationRoute只对mode是`navigate`的请求有用，即请求的目标是document。NavigationRoute对spa非常有用，因为无论你访问什么样的页面route，最终都会重定向到index.html，然后里面的js再控制渲染响应的dom。设置了以后，如访问/,/another,/other/one，都指向index.html，并且符合这些页面都不会再在cache里面缓存一份重复的数据。具体说明设置请查看src/entry/sw.js里面的设置。

### [workbox.strategies](https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies)

- matchOptions: 同[cache.match](https://developer.mozilla.org/zh-CN/docs/Web/API/Cache/match)里面的options。但是注意的是，这个在workbox中仅仅被用在cache匹配。也就是说，如果配置了ignoreSearch:true，当cache里面已经有了一份/path1的缓存，那么在offline时访问/path1, /path1#hash, /path1?querystring ，都会返回/path1的缓存。但是在online时，再次进行访问上述两个url，则在cache里面分别会put一份缓存，即总共3份一模一样的。

### workbox缓存机制问题

workbox在调用cache.put时，request.url是full。比如，设置了ignoreSearch:true，访问another.html，cache里面存了一份；再访问another.html?querystring，虽然response没变，但还是会在cache里面再存一份。解决方案：暂时只能自己写handler来控制responseWith以及cache.put逻辑。但是个人想用workbox.expiration的逻辑，尤其是purgeOnQuotaError的配置，而workbox并没有对此开放更多说明，自己写需要大量的研究以及代码量。
