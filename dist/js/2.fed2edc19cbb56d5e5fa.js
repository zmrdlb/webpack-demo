/*! 版权所有 zmrdlb */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "8R99":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9nwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
/**
 * https://webpack.docschina.org/guides/tree-shaking/
 */
console.log('tree-shaking.js加载进来了');
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}

/***/ }),

/***/ "AE0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_code_splitting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("y5lG");



__webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "uhBA"));
Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "G55l"));
Object(common_code_splitting__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('another');

document.getElementById('lazyprint').onclick = function (e) {
  return __webpack_require__.e(/* import() | print */ 4).then(__webpack_require__.bind(null, "hYRk")).then(function (module) {
    var print = module.default;
    print();
  });
};

console.log("process.env.NODE_ENV\u7684\u503C\u662F".concat("production"));

/***/ }),

/***/ "HM9e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "R7XS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oVuX");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vevk");
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var comp_Greeter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WmMh");
/* harmony import */ var common_tree_shaking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9nwz");
/* harmony import */ var common_code_splitting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("y5lG");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("33yf");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var theme_index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("HM9e");
/* harmony import */ var theme_index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(theme_index_less__WEBPACK_IMPORTED_MODULE_9__);










 //测试code-splitting

Object(common_code_splitting__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('index'); //和dynamic-common都引入了path，那么dynamic-common.js里是否会再生成path相关的代码

console.log(path__WEBPACK_IMPORTED_MODULE_7___default.a.join(__dirname, 'index')); //测试.babelrc里设置useBuiltIns:true, 对polyfill的编译效果

var array1 = [1, 2, 3, 4];

_babel_runtime_corejs3_core_js_instance_fill__WEBPACK_IMPORTED_MODULE_1___default()(array1).call(array1, 6, 1, 2);

console.log(array1);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "tree-shaking\u6D4B\u8BD5\uFF1A", Object(common_tree_shaking__WEBPACK_IMPORTED_MODULE_5__[/* cube */ "a"])(5)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(comp_Greeter__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Hello, ZMRDLB!")), document.getElementById('root'));
jquery__WEBPACK_IMPORTED_MODULE_8___default()('#exclude-test').html('jquery 单独打包测试');
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "WmMh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06Pm");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kA7L");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3SUL");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eYnF");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("X5/F");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iLfi");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("iLfi", 1);
/* harmony import */ var _Greeter_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8R99");
/* harmony import */ var _Greeter_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Greeter_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oGMY");
/* harmony import */ var _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_8__);










var Greeter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Greeter, _Component);

  function Greeter() {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Greeter);

    return _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Greeter).apply(this, arguments));
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Greeter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "root"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, _config_json__WEBPACK_IMPORTED_MODULE_6__.greetText), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_8___default.a
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "number"
      }, "28"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "house"
      }));
    }
  }]);

  return Greeter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Greeter);

/***/ }),

/***/ "iLfi":
/***/ (function(module) {

module.exports = JSON.parse("{\"greetText\":\"Hi there and greetings from JSON!\"}");

/***/ }),

/***/ "oGMY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABQGAAAUBgHi2OFOAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5fiS5QAAAE90Uk5TAAECAwQGCw8UFRYbHCIwNTc5QEZNT1BaX2JjZWlqa2xtbm9weHp/gISFioyQkZSWmp6foKSnsLKzuru+wsPO2Nze3+Hl5+zx8vf4+fv9/nFxILYAAAI7SURBVFjDrZdpe9JAFIUvRhCQvVDaCrig1rAoUmhZDBSQfXn//7/xg8tDbTKTMNyPOXNOnrlzVxEPi+Srtc5wvFqNh51aNR+RQBa7fljzxNYP1zG/7HDJ2QOL/p1dvkynC2W73V8A+x+lsA96qDgBpo2cdfzVyjWmwKQY0vEvRrC0U25Qyl7C6EJJTwxg24x6wdHmFgYJb352zqGbVP0h2T0wz3qhVxtmGd0dMzM2V66IVQcnrvdy3IG65cK/h1bY1zO34P65Qp1dxW+kVHbUn90fKv4jtQL/+SG7oRUk1ltsnrxFYo4TDiIQdpgfx8OAWTxYusVnDI7il0NGAlrmwL+oDo3oSmDrMvqbWUW2yeACyS3FPw6Z0JQTrMnkt+NLLKPKk688cnNJSUREHGwl/8Puqztg44iIxPaklHz44o6k2MdE5Iapiv8eOpYHNuVGRHo0TuRLg55IZE3Om/9OxZcc64jkWXifeKvki7UgL1X6p/JF+lSlxp0i69V8aVOTjmcUlLV8senIkLI7WDpo+VJmKGMuXbE3PvhSYCwr0q7YTx5favMpzcpT4CN8C/kR8LqC3PpQKDD2dqIfhTJDxTP6ULDpqAJJr9CmpgxlrUKfqjqZNArWgrwmndUKOdYRXUFRKjTo6Uua3MInZUnTFVX5fPiuLKrasi6vXyjLur6xiKaxGLc24+Zq3t6NBwzzEcd8yDIe88wHTfNR13zYNh73zReOM6w85kuX+dp3hsXTfPU9w/IdbP3/Bd0blMyffs9IAAAAAElFTkSuQmCC"

/***/ }),

/***/ "y5lG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * https://webpack.docschina.org/guides/code-splitting
 */
console.log('code-splitting.js加载进来了');
/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  console.log(name + '调用了code-splitting');
});

/***/ })

}]);
//# sourceMappingURL=commons.fed2edc19cbb56d5e5fa.map