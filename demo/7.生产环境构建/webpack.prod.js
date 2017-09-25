// 其他插件
const merge = require('webpack-merge');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
        // 精简输出，移除未引用代码，压缩代码
        new uglifyJSPlugin(),
        new webpack.DefinePlugin({
            // 暴露一个变量给node环境，表示是生产环境
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});