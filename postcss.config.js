module.exports = {
    plugins: [
        // https://github.com/postcss/postcss-import
        // postcss-import 是用于解决 @import 规则的。但是 css-loader 也提供了此功能，所以可以不用引用此插件。
        //require('postcss-import'),

        // https://github.com/csstools/postcss-preset-env
        require('postcss-preset-env')

        // postcss-preset-env 已经包含了 autoprefixer，所以不需要再添加了
        //require('autoprefixer')
    ]
}
