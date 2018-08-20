/*! 版权所有 zmrdlb */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "16xR":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
/* harmony import */ var common_code_splitting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y5lG");


Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "uhBA"));
Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "G55l"));

Object(common_code_splitting__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('another');

document.getElementById('lazyprint').onclick = e => __webpack_require__.e(/* import() | print */ 6).then(__webpack_require__.bind(null, "hYRk")).then(module => {
    var print = module.default;
    print();
});

/***/ }),

/***/ "R7XS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R5XZ");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ew+T");
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rGqo");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var comp_Greeter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WmMh");
/* harmony import */ var common_tree_shaking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9nwz");
/* harmony import */ var common_code_splitting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("y5lG");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("33yf");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("16xR");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);















//测试code-splitting
Object(common_code_splitting__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])('index');

//和dynamic-common都引入了path，那么dynamic-common.js里是否会再生成path相关的代码
console.log(path__WEBPACK_IMPORTED_MODULE_8___default.a.join(__dirname, 'index'));

//测试.babelrc里设置useBuiltIns:true, 对polyfill的编译效果
var array1 = [1, 2, 3, 4];
array1.fill(6, 1, 2);
console.log(array1);

react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        'p',
        null,
        'tree-shaking\u6D4B\u8BD5\uFF1A',
        Object(common_tree_shaking__WEBPACK_IMPORTED_MODULE_6__[/* cube */ "a"])(5)
    ),
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        comp_Greeter__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
        null,
        'Hello, ZMRDLB!'
    )
), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "WmMh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transform_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G4Gp");
/* harmony import */ var react_transform_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transform_hmr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iLfi");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("iLfi", 1);
/* harmony import */ var _Greeter_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8R99");
/* harmony import */ var _Greeter_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Greeter_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oGMY");
/* harmony import */ var _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_4__);


const _components = {
    Greeter: {
        displayName: 'Greeter'
    }
};

const _reactTransformHmr2 = react_transform_hmr__WEBPACK_IMPORTED_MODULE_1___default()({
    filename: '/Users/A88245/Documents/mycode/webpack-demo/src/components/Greeter/index.js',
    components: _components,
    locals: [module],
    imports: [react__WEBPACK_IMPORTED_MODULE_0___default.a]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}







const Greeter = _wrapComponent('Greeter')(class Greeter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'root' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                null,
                _config_json__WEBPACK_IMPORTED_MODULE_2__.greetText
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                null,
                this.props.children
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _arrow_circle_left_png__WEBPACK_IMPORTED_MODULE_4___default.a }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: 'number' },
                '28'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'house' })
        );
    }
});

/* harmony default export */ __webpack_exports__["a"] = (Greeter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "iLfi":
/***/ (function(module) {

module.exports = {"greetText":"Hi there and greetings from JSON!"};

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
//# sourceMappingURL=commons.47039bd746598930acb9.map