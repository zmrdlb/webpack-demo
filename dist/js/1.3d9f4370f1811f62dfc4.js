/*! 版权所有 zmrdlb */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "cesN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oVuX");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SLhn");
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("33yf");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dynamic_common_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xWIN");



/**
 * https://webpack.docschina.org/plugins/split-chunks-plugin/
 */
console.log('dynamic-common.js加载进来了');
/**
 * 引入path事实上没有什么用，主要是用来测试splitChunks.cacheGroups
 *
 * 根据priority的设置，vendors里面已经有了path。那么async里面就无需再生成这些代码了
 */



console.log(_dynamic_common_less__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
console.log(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, 'dynamic-common')); // test :global and normal

var globalContainer = document.createElement('p');
globalContainer.classList.add('my-global-class');
globalContainer.innerHTML = ':global方式或普通文本声明的class，不会被编译，也不会被 export。<span class="tips">小提示</span>';
document.body.appendChild(globalContainer); // test :local

var container = document.createElement('div');
container.classList.add(_dynamic_common_less__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].dynamicCommon);
document.body.appendChild(container);
/* harmony default export */ __webpack_exports__["default"] = (function (name) {
  var _context;

  var content = _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = "<span class=\"".concat(_dynamic_common_less__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"][name], "\">")).call(_context, name, "\u8C03\u7528\u4E86dynamic-common</span>");

  var item = document.createElement('div');
  item.innerHTML = content;
  container.appendChild(item);
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "xWIN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"dynamicCommon":"k0V6rMD60NgA2XQE0PB5E","detail":"_26baFK5IqO54jemFZ28RG8","list":"_6Qk6oDKtA7VNddCs7vA7M"});

/***/ })

}]);
//# sourceMappingURL=1.3d9f4370f1811f62dfc4.map