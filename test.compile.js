import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";

/**
 * useBuiltIns 相关的 code case:
 *
 * "entry"
 *      import "core-js"
 *      var a = new Promise();
 *      class Person {}
 * "usage"
 *      var a = new Promise();
 *      class Person {}
 *
 * @type {Promise}
 */
var a = new _Promise();

var Person = function Person() {
  _classCallCheck(this, Person);
};
