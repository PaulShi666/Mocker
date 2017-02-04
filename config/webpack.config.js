/**
 * Created by mac on 17/1/16.
 */

const npmPackage = require('../package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "mocker":"./src/mocker"
    },
    output:{
        path: 'dist',
        filename: `[name].${npmPackage.version}.js`
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //
        // }),
        // demo页生成
        new HtmlWebpackPlugin({
            template:'./src/demo/index.html',
            filename:'demo/index.html'
        })
    ],
    devServer: {
        contentBase: false,
        port: 9090
    }
};