import _ from 'lodash';
import './style.css';
import icon from './icon.png';

var compont = () => {
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['hello','webpack'], ' ');
    var img = document.createElement('img');
    img.src = icon


    ele.appendChild(img);

    return ele;
}
document.body.appendChild(compont());
