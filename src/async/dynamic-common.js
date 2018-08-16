/**
 * https://webpack.docschina.org/plugins/split-chunks-plugin/
 */

console.log('dynamic-common.js加载进来了');

/**
 * 引入path事实上没有什么用，主要是用来测试splitChunks.cacheGroups
 *
 * 根据priority的设置，vendors里面已经有了path。那么async里面就无需再生成这些代码了
 */
import path from 'path';

console.log(path.join(__dirname,'dynamic-common'));

export default function(name){
    console.log(name+'调用了dynamic-common');
}
