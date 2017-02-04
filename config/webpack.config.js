/**
 * Created by mac on 17/1/16.
 */

const npmPackage = require('../package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

// console.log(process);
module.exports = {
    entry: {
        "mocker-min": "./src/mocker",
        "mocker": "./src/mocker"
    },
    output: {
        path: 'dist',
        filename: `[name].${npmPackage.version}.js`
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                include: /src/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                include: /src/,
                loader: 'html-loader'
            },
            {
                test: /\.css/,
                include: /src/,
                loader: 'css-loader'
            }
        ]
    },
    devtool: 'source-map"',
    get plugins() {
        let pluginStack = [
            // 置入环境变量
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
            // demo页生成
            new HtmlWebpackPlugin({
                template: './src/demo/index.html',
                filename: 'demo/index.html'
            })
        ];

        if (PRODUCTION) {
            // 代码压缩
            pluginStack.push(
                new webpack.optimize.UglifyJsPlugin({
                    // 正则匹配压缩版本文件名
                    include:/^mocker-min\.(\d{1,2}\.)*js$/,
                    sourceMap: true
                }))
            ;
        }
        return pluginStack;
    },
    devServer: {
        port: 9090
    }
};

