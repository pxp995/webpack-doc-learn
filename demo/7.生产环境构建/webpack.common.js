// 放公用的东西
const path = require('path');
// 自动生成html模版
const htmlWebpackPlugin = require('html-webpack-plugin');
// 清除／.dist文件夹
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.js',
        // printf: './src/printf.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title:'生产环境配置'
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
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