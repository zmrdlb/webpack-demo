import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from 'comp/Greeter';
import {cube} from 'common/tree-shaking';
import CodeSplitting from 'common/code-splitting';
import path from 'path';
import 'common/hmr';

import "./index.less";

CodeSplitting('index');

console.log(path.join(__dirname,'index'));

ReactDOM.render(
    <div>
        <p>tree-shaking测试：{cube(5)}</p>
        <Greeter>Hello, ZMRDLB!</Greeter>
    </div>,
    document.getElementById('root')
);
