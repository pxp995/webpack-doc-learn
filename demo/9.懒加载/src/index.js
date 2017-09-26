// import _ from 'lodash';
// import printf from './printf.js';
import { cube } from './math.js'
import './style.css';

var compont = () => {
    var ele = document.createElement('div');
    // ele.innerHTML = _.join(['Hello','webpack'], ' ');
    ele.innerHTML = '2的立方：' + cube(2);
    var btn = document.createElement('button');
    btn.innerHTML = '点我后控制台有显示东西哦';
    // 在此有个很奇怪的问题，当使用es2015的loader时会报错，把loader注释掉才能正常编译运行。
    // ea2015 loader会把import前的空格转义为‘\\u001b[39m \\u001b[36m’导致出错
    btn.onclick = e => import(/* webpackChunkName: "printf" */ './printf').then(module => {
        var printf = module.default;
        printf();
    });

    ele.appendChild(btn);
    return ele;
}
var element = compont();
document.body.appendChild(element);

// 热替换配置(只针对printf.js的模块替换)
if (module.hot) {
    module.hot.accept('./printf.js', () => {
        console.log('updating...');
        // 手动重新加载更新的代码
        document.body.removeChild(element);
        element = compont();
        document.body.appendChild(element);
    })
}
