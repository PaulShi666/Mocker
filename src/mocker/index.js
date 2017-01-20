/**
 * Created by mac on 17/1/17.
 */


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

let d = new MockerHttpRequest();

const mocker = {

};

export default mocker