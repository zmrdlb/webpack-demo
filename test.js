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

var a = new Promise();

class Person {}
