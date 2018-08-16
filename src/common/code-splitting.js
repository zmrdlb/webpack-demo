/**
 * https://webpack.docschina.org/guides/code-splitting
 */

console.log('code-splitting.js加载进来了');

export default function(name){
    console.log(name+'调用了code-splitting');
}
