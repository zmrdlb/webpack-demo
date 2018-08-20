/*! 版权所有 zmrdlb */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "cesN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("33yf");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/**
 * https://webpack.docschina.org/plugins/split-chunks-plugin/
 */

console.log('dynamic-common.js加载进来了');

/**
 * 引入path事实上没有什么用，主要是用来测试splitChunks.cacheGroups
 *
 * 根据priority的设置，vendors里面已经有了path。那么async里面就无需再生成这些代码了
 */


console.log(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'dynamic-common'));

/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  console.log(name + '调用了dynamic-common');
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ })

}]);
//# sourceMappingURL=1.7a4567580085b1ac51d8.map