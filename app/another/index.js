document.getElementById('lazyprint').onclick = e => import(/* webpackChunkName: "print" */ "../print/index.js").then(module => {
    var print = module.default;
    print();
});
