/**
 * Created by mac on 17/1/16.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/mocker',
    output:{
        path: 'dist',
        filename: "[name].[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/doc/index.html'
        })
    ],
    devServer: {
        port: 9090
    }
};