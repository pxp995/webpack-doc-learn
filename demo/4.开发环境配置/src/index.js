import _ from 'lodash';
import printf from './printf.js'

var compont = () => {
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['hello','webpack'], ' ');
    var btn = document.createElement('button');
    btn.innerHTML = '点我后控制台有显示东西哦';
    btn.onclick = printf;

    ele.appendChild(btn);
    return ele;
}
document.body.appendChild(compont());
