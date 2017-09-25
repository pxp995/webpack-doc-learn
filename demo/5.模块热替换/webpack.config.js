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
    devtool: 'inline-source-map',
    // 配置开发服务器，传递参数为1.服务器所在目录；2.进行压缩；3.监听端口号
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9090,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title:'模块热替换'
        }),
        new cleanWebpackPlugin(['dist']),
        // 热替换插件
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
            }
        ]
    }
};