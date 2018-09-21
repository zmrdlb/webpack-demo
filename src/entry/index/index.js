import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from 'comp/Greeter';
import {cube} from 'common/tree-shaking';
import CodeSplitting from 'common/code-splitting';
import path from 'path';
import 'common/hmr';
import './sw-register';

import "./index.less";

//测试code-splitting
CodeSplitting('index');

//和dynamic-common都引入了path，那么dynamic-common.js里是否会再生成path相关的代码
console.log(path.join(__dirname,'index'));

//测试.babelrc里设置useBuiltIns:true, 对polyfill的编译效果
var array1 = [1, 2, 3, 4];
array1.fill(6,1,2);
console.log(array1);

ReactDOM.render(
    <div>
        <p>tree-shaking测试：{cube(5)}</p>
        <Greeter>Hello, ZMRDLB!</Greeter>
    </div>,
    document.getElementById('root')
);
