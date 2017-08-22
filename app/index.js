import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';

import "./index.css";
// import _ from 'lodash';

// var from = _.join(['main', 'module', 'loaded!'], ' ');

ReactDOM.render(
    <Greeter>Hello, ZMRDLB!</Greeter>,
    document.getElementById('root')
);

// document.getElementById('mylazyClick').onClick = e => {
//     import(/* webpackChunkName: "print" */ './print').then(module => {
//         var print = module.default;
//         print();
//     });
// }
