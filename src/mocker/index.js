/**
 * Created by mac on 17/1/17.
 */

import * as npmPackage from '../../package.json';

import mockerConfig from './config';

import {createMockerDatabase, addMockerRecord} from './Data';
//
//
// var _XMLHttpRequest = window.XMLHttpRequest;
// var _xmlHttpRequest = new _XMLHttpRequest();
// var isMock = true;
//
//
//
// window.XMLHttpRequest = MockerHttpRequest;
//
//
// document.getElementById('b1').addEventListener('click', function (e) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "/api/getList");
//     xhr.onload = function () {
//         console.log(this);
//         document.getElementById('r1').innerText = this.responseText;
//     };
//     xhr.send();
// });

import {MockerHttpRequest} from './MockerHttpRequest';

// 初始化Mocker
const mocker = {
    config: mockerConfig,
    version: npmPackage.version,
    mock: addMockerRecord
};
if (window.XMLHttpRequest) {
    window.XMLHttpRequest = MockerHttpRequest;
}
if (!window.mocker || window.mocker.version !== mocker.version) {
    window.mocker = mocker;
}
//初始化Mocker对应数据库
createMockerDatabase();


export default mocker