const path = require('path');
// 自动生成html模版
const htmlWebpackPlugin = require('html-webpack-plugin');
// 清除／.dist文件夹
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// 精简输出
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        added: './src/add-module.js'
        // printf: './src/printf.js'
    },
    devtool: 'inline-source-map',
    // 配置开发服务器，传递参数为1.服务器所在目录；2.进行压缩；3.监听端口号
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9090,
        hotOnly: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title:'代码分离'
        }),
        new cleanWebpackPlugin(['dist']),
        // 热替换插件
        new webpack.HotModuleReplacementPlugin(),
        // 精简输出，移除未引用代码，压缩代码
        new uglifyJSPlugin(),
        // 防止代码分离后模块的重复
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 支持es6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};