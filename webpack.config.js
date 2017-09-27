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
        added: './src/add-module.js',
        // printf: './src/printf.js',
        // 添加类库的长效缓存
        vendor: [
            'lodash'
        ]
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
            title:'缓存'
        }),
        new cleanWebpackPlugin(['dist']),
        // 热替换插件(在此插件下output的文件名chunkhash不能使用)
        // new webpack.HotModuleReplacementPlugin(),
        // 精简输出，移除未引用代码，压缩代码
        // new uglifyJSPlugin(),
        // hash使用模块路径而不使用数字，解决改变引入、删除模块时vendor重新构建
        new webpack.HashedModuleIdsPlugin(),
        // 防止代码分离后模块的重复
        // vendor用于类库的长效缓存，与entry的wendor对应
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' 
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 表示只对src下的文件进行构建，提高性能
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            },
            // 支持es6
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};