!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MOCKERHTTPREQUEST_DELAY=0,t.XHR_EVENTS={READYSTATECHANGE:"readystatechange",LOADSTART:"loadstart",PROGRESS:"progress",ABORT:"abort",ERROR:"error",LOAD:"load",TIMEOUT:"timeout",LOADEND:"loadend"},t.HTTP_STATUS_CODES={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"},t.MOCKER_DATABASE_NAME="MockerDatabase"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.default={timeout:o.MOCKERHTTPREQUEST_DELAY}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=o(r),a=n(0),c={init:function(){var e=document.createElement("div");e.className="mocker",e.innerHTML=i.default,document.body.appendChild(e),this.setInitialStyle(e),e.querySelector(".mocker-switch-btn").onclick=this.switchStatus.bind(this,e),e.querySelector(".mocker-table .add").onclick=this.switchAdd.bind(this,e),e.querySelector(".mocker-table .list").onclick=this.switchList.bind(this,e),e.querySelector(".mocker-table .save").onclick=this.handleSave.bind(this,e)},setInitialStyle:function(e){0===window.mocker.status?e.querySelector(".mocker-icon").classList.remove("opened"):1===window.mocker.status&&e.querySelector(".mocker-icon").classList.add("opened")},switchStatus:function(e,t){0===window.mocker.status?(e.querySelector(".mocker-icon").classList.add("opened"),window.mocker&&window.mocker.open()):1===window.mocker.status&&(e.querySelector(".mocker-icon").classList.remove("opened"),window.mocker&&window.mocker.close())},switchAdd:function(e,t){e.querySelector(".form-add").style.display="block",e.querySelector(".list-panel").style.display="none"},switchList:function(e){(0,a.getAllMockerRecord)().then(function(t){e.querySelector(".form-add").style.display="none",e.querySelector(".list-panel").style.display="block",e.querySelector(".mocker-list").innerHTML=t.map(function(e,t,n){return"<tr>\n                                <td>"+e.url+"</td>\n                                <td>"+e.method+"</td>\n                                <td>"+e.response+"</td>\n                            </tr>"})})},handleSave:function(e,t){t.preventDefault();var n=e.querySelector(".form-add");console.log(n.querySelector("input[name=url]").value),mocker.mock({url:n.querySelector("input[name=url]").value,method:n.querySelector("input[name=method]").value,response:n.querySelector("input[name=response]").value})}};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}),t.default=o.MockerHttpRequest},function(e,t){e.exports={name:"Mocker",version:"1.0.0",description:"A mock data management tool",main:"index.js",scripts:{dev:" NODE_ENV=development webpack-dev-server --hot  --config config/webpack.config.js",build:"npm run clean && NODE_ENV=production webpack --config config/webpack.config.js",clean:"rm -rf dist"},repository:{type:"git",url:"git+https://github.com/PaulShi666/Mocker.git"},keywords:["mock","Http"],author:"Paul",license:"ISC",bugs:{url:"https://github.com/PaulShi666/Mocker/issues"},homepage:"https://github.com/PaulShi666/Mocker#readme",devDependencies:{"babel-core":"^6.22.1","babel-loader":"^6.2.10","babel-preset-es2015":"^6.22.0","css-loader":"^0.26.1","file-loader":"^0.10.0","html-loader":"^0.4.4","html-webpack-plugin":"^2.26.0","url-loader":"^0.5.7",webpack:"^2.2.1","webpack-dev-server":"^1.16.2"}}},function(e,t,n){"use strict";function o(){var e=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction||{READ_WRITE:"readwrite"},window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange,window.indexedDB.open(d.MOCKER_DATABASE_NAME));e.onerror=function(){throw new Error("数据库创建失败")},e.onsuccess=function(e){p=e.target.result},e.onupgradeneeded=function(e){p=e.target.result;var t=p.createObjectStore("records",{keyPath:"id",autoIncrement:!0});t.createIndex("methodUrl",["method","url"],{unique:!0})}}function r(e){u(e);var t=p.transaction("records","readonly").objectStore("records");return new Promise(function(n,o){t.index("methodUrl").get([e.method,e.url]).onsuccess=function(e){n(e.target.result)}})}function i(e){var t=[],n=p.transaction("records","readonly").objectStore("records");return new Promise(function(e,o){n.openCursor().onsuccess=function(n){var o=n.target.result;o?(t.push(o.value),o.continue()):e(t)}})}function a(e){u(e);var t=p.transaction("records","readwrite").objectStore("records"),n=t.add({method:e.method,url:e.url,response:e.response});n.onsuccess=function(){},n.onerror=function(){throw new Error("Mocker数据库添加失败")}}function c(e){}function s(e){}function u(e){if("object"!==("undefined"==typeof e?"undefined":l(e))||"string"!=typeof e.method||"string"!=typeof e.url||!/^(get|post)$/i.test(e.method))throw new Error("数据库mock参数非法")}Object.defineProperty(t,"__esModule",{value:!0}),t.updateMockerRecord=t.deleteMockerRecord=t.addMockerRecord=t.getAllMockerRecord=t.getMockerRecord=t.createMockerDatabase=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(1),p=void 0;t.createMockerDatabase=o,t.getMockerRecord=r,t.getAllMockerRecord=i,t.addMockerRecord=a,t.deleteMockerRecord=c,t.updateMockerRecord=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){window.XMLHttpRequest&&(window.XMLHttpRequest=a),window.mocker&&(window.mocker.status=1)}function i(){window.XMLHttpRequest=v,window.ActiveXObject=b,window.mocker&&(window.mocker.status=0)}function a(){Object.defineProperties(this,{_xmlHttpRequest:{writable:!1,enumerable:!1,configurable:!1},_listeners:{value:{}},_requestHeader:{value:{}},config:{value:{timeout:f.default.timeout,record:null}},onerror:{value:null},onload:{value:null},onloadend:{value:null},onloadstart:{value:null},onprogress:{value:null},onreadystatechange:{value:null},ontimeout:{value:null},readyState:{value:0,writable:!0},response:{value:"",writable:!0},responseText:{value:"",writable:!0},responseType:{value:""},responseURL:{value:""},responseXML:{value:null},status:{value:0,writable:!0},statusText:{value:"",writable:!0},timeout:{value:0}})}function c(){}function s(){}function u(e){return(0,m.getMockerRecord)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.resetXMLHttpRequest=t.replaceXMLHttpRequest=t.MockerHttpRequest=void 0;var l=n(9),d=n(1),p=n(2),f=o(p),m=n(0),v=window.XMLHttpRequest,b=window.ActiveXObject,y={constructor:{value:a,configurable:!0,enumerable:!1,writable:!0},DONE:{value:4},HEADERS_RECEIVED:{value:2},LOADING:{value:3},OPENED:{value:1},UNSENT:{value:0},abort:{value:function(){this.readyState=y.UNSENT.value,this.dispatchEvent(new Event(d.XHR_EVENTS.ABORT)),this.dispatchEvent(new Event(d.XHR_EVENTS.ERROR))}},getAllResponseHeaders:{value:function(){}},getResponseHeader:{value:function(){}},onabort:{},onerror:{},onload:{},onloadend:{},onloadstart:{},onprogress:{},onreadystatechange:{},ontimeout:{},open:{value:function(e,t,n,o,r){this.config.open={method:e,url:t,async:"boolean"!=typeof n||n,username:o,password:r};var i=this;this.config.record=u({method:e,url:t}).then(function(e){return e&&(i.readyState=y.OPENED.value,i.dispatchEvent(new Event(d.XHR_EVENTS.READYSTATECHANGE))),e})}},overrideMimeType:{value:function(){}},readyState:{},response:{},responseText:{},responseType:{},responseURL:{},responseXML:{},send:{value:function(e){function t(){this.readyState=y.HEADERS_RECEIVED.value,this.dispatchEvent(new Event(d.XHR_EVENTS.READYSTATECHANGE)),this.readyState=y.LOADING.value,this.dispatchEvent(new Event(d.XHR_EVENTS.READYSTATECHANGE)),this.status=200,this.statusText=d.HTTP_STATUS_CODES[200],this.readyState=y.DONE.value,this.dispatchEvent(new Event(d.XHR_EVENTS.READYSTATECHANGE)),this.dispatchEvent(new Event(d.XHR_EVENTS.LOAD)),this.dispatchEvent(new Event(d.XHR_EVENTS.LOADEND))}var n=this;this.config.record.then(function(e){e&&(n.response=n.responseText=e.response,n.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),n.dispatchEvent(new Event(d.XHR_EVENTS.LOADSTART)),n.config.open.async===!0?window.setTimeout(t.bind(n),n.config.timeout):t.call(n))})}},setRequestHeader:{value:function(e,t){e in this._requestHeader?this._requestHeader[e]=","+t:this._requestHeader[e]=t}},status:{},statusText:{},timeout:{},upload:{}},h={constructor:{value:c,configurable:!0,enumerable:!1,writable:!0},onabort:{},onerror:{},onload:{},onloadend:{},onloadstart:{},onprogress:{},ontimeout:{}},w={constructor:{value:s,configurable:!0,enumerable:!1,writable:!0},addEventListener:{value:function(e,t){return e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(t),t}},dispatchEvent:{value:function(e){if(e.type in this._listeners){var t=this._listeners[e.type];if("Array"===(0,l.getVariableType)(t))for(var n=0;n<t.length;n++)t[n].call(this,e)}}},removeEventListener:{value:function(e,t){if(e in this._listeners){var n=this._listeners[e];if("Array"===(0,l.getVariableType)(n))for(var o=0;o<n.length;o++)n[o]===t&&(n[o].splice(o,1),o--)}}}};a.prototype=(0,l.createPrototypeChain)(y,h,w),t.MockerHttpRequest=a,t.replaceXMLHttpRequest=r,t.resetXMLHttpRequest=i},function(e,t,n){"use strict";function o(){return"object"!==i(arguments[0])?void console.error("原型链属性为对象类型"):1===arguments.length?Object.create(Object.prototype,arguments[0]):Object.create(o.apply(null,Array.prototype.slice.call(arguments,1)),arguments[0])}function r(e){return Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.createPrototypeChain=o,t.getVariableType=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},function(e,t){e.exports='<style>\n    .mocker {\n\n    }\n\n    .mocker .mocker-container {\n        border-radius: 10px;\n        position: fixed;\n        background: #F0F0F0;\n        right: 10px;\n        top: 10px;\n        text-align: center;\n        padding: 5px;\n    }\n\n    .mocker .mocker-icon {\n        fill: #334ff9;\n    }\n\n    .mocker .mocker-icon.opened {\n        fill: #fd0000;\n    }\n\n    .mocker .mocker-switch-btn {\n        border: none;\n        background: transparent;\n\n        padding: 5px 10px;\n        margin: 0;\n        outline: none;\n    }\n\n    .mocker .mocker-table {\n\n    }\n    .mocker .form-add,.mocker .list-panel{\n        display: none;\n    }\n</style>\n<script>\n\n</script>\n<div class="mocker-container">\n    <button class="mocker-switch-btn">\n        <svg class="mocker-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"\n             xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">\n            <path d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"></path>\n        </svg>\n    </button>\n    <div class="mocker-table">\n\n        <button class="add">增加</button>\n        <button class="list">数据</button>\n\n        <form action="" class="form-add">\n            <p>\n                <label>\n                    <input placeholder="请求路径" type="text" name="url"/>\n                </label>\n            </p>\n            <p>\n                <label>\n                    <input type="radio" name="method" value="GET">GET\n                </label>\n                <label>\n                    <input type="radio" name="method" value="POST">POST\n                </label>\n            </p>\n\n            <p>\n                <input placeholder="响应数据" name="response" type="text">\n            </p>\n\n            <button class="save">保存</button>\n        </form>\n\n        <table class="list-panel">\n            <thead>\n            <tr>\n                <td>请求路径</td>\n                <td>请求方式</td>\n                <td>响应数据</td>\n            </tr>\n            </thead>\n            <tbody class="mocker-list">\n\n            </tbody>\n        </table>\n    </div>\n</div>\n'},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=r(i),c=n(2),s=o(c),u=n(0),l=n(4),d=n(3),p=o(d),f={open:l.replaceXMLHttpRequest,close:l.resetXMLHttpRequest,status:0,config:s.default,version:a.version,mock:function(){u.addMockerRecord.apply(this,arguments)}};window.mocker&&window.mocker.version===f.version||(window.mocker=f);try{(0,u.createMockerDatabase)()}catch(e){console.log("初始化Mocker数据库失败",e)}try{p.default.init()}catch(e){console.log("初始化MockerGui失败",e)}t.default=f}]);
//# sourceMappingURL=mocker-min.1.0.0.js.map