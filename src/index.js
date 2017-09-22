import _ from 'lodash'

var compont = () => {
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['hello','webpack'], ' ');

    return ele;
}
document.body.appendChild(compont());
