import _ from 'lodash';
import printf from './printf.js';
import './style.css';

var compont = () => {
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['Hello','webpack'], ' ');
    var btn = document.createElement('button');
    btn.innerHTML = '点我后控制台有显示东西哦';
    btn.onclick = printf;

    ele.appendChild(btn);
    return ele;
}
var element = compont();
document.body.appendChild(element);

// 热替换配置
if (module.hot) {
    module.hot.accept('./printf.js', () => {
        console.log('updating...');
        // 手动重新加载更新的代码
        document.body.removeChild(element);
        element = compont();
        document.body.appendChild(element);
    })
}
