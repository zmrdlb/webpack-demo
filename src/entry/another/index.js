import CodeSplitting from 'common/code-splitting';

import('async/detail');
import('async/list');

CodeSplitting('another');

document.getElementById('lazyprint').onclick = e => import(/* webpackChunkName: "print" */ "async/print").then(module => {
    var print = module.default;
    print();
});

console.log(`process.env.NODE_ENV的值是${process.env.NODE_ENV}`);
