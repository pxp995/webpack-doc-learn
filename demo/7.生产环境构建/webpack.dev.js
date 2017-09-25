// 环境配置
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // 配置开发服务器，传递参数为1.服务器所在目录；2.进行压缩；3.监听端口号
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9090,
        hotOnly: true
    }
});