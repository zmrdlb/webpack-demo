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

import styles from './dynamic-common.less';

console.log(styles);

console.log(path.join(__dirname,'dynamic-common'));

// test :global and normal
var globalContainer = document.createElement('p');
globalContainer.classList.add('my-global-class');
globalContainer.innerHTML = ':global方式或普通文本声明的class，不会被编译，也不会被 export。<span class="tips">小提示</span>';
document.body.appendChild(globalContainer);

// test :local
var container = document.createElement('div');
container.classList.add(styles.dynamicCommon);
document.body.appendChild(container);

export default function(name){
    var content = `<span class="${styles[name]}">${name}调用了dynamic-common</span>`;
    var item = document.createElement('div');
    item.innerHTML = content;
    container.appendChild(item);
}
