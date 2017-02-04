!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MOCKERHTTPREQUEST_DELAY=0,t.XHR_EVENTS={READYSTATECHANGE:"readystatechange",LOADSTART:"loadstart",PROGRESS:"progress",ABORT:"abort",ERROR:"error",LOAD:"load",TIMEOUT:"timeout",LOADEND:"loadend"},t.HTTP_STATUS_CODES={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"},t.MOCKER_DATABASE_NAME="MockerDatabase"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0);t.default={timeout:n.MOCKERHTTPREQUEST_DELAY}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}),t.default=n.MockerHttpRequest},function(e,t){e.exports={name:"Mocker",version:"1.0.0",description:"A mock data management tool",main:"index.js",scripts:{dev:" NODE_ENV=development webpack-dev-server --hot  --config config/webpack.config.js",build:"npm run clean && NODE_ENV=production webpack --config config/webpack.config.js",clean:"rm -rf dist"},repository:{type:"git",url:"git+https://github.com/PaulShi666/Mocker.git"},keywords:["mock","Http"],author:"Paul",license:"ISC",bugs:{url:"https://github.com/PaulShi666/Mocker/issues"},homepage:"https://github.com/PaulShi666/Mocker#readme",devDependencies:{"babel-core":"^6.22.1","babel-loader":"^6.2.10","babel-preset-es2015":"^6.22.0","html-webpack-plugin":"^2.26.0",webpack:"^2.2.1","webpack-dev-server":"^1.16.2"}}},function(e,t,o){"use strict";function n(){var e=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction||{READ_WRITE:"readwrite"},window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange,window.indexedDB.open(l.MOCKER_DATABASE_NAME));e.onerror=function(){throw new Error("数据库创建失败")},e.onsuccess=function(e){d=e.target.result},e.onupgradeneeded=function(e){d=e.target.result;var t=d.createObjectStore("records",{keyPath:"id",autoIncrement:!0});t.createIndex("methodUrl",["method","url"],{unique:!0})}}function r(e){s(e);var t=d.transaction("records","readonly").objectStore("records");return new Promise(function(o,n){t.index("methodUrl").get([e.method,e.url]).onsuccess=function(e){o(e.target.result)}})}function i(e){s(e);var t=d.transaction("records","readwrite").objectStore("records"),o=t.add({method:e.method,url:e.url,response:e.response});o.onsuccess=function(){},o.onerror=function(){throw new Error("Mocker数据库添加失败")}}function a(e){}function u(e){}function s(e){if("object"!==("undefined"==typeof e?"undefined":c(e))||"string"!=typeof e.method||"string"!=typeof e.url||!/^(get|post)$/i.test(e.method))throw new Error("数据库mock参数非法")}Object.defineProperty(t,"__esModule",{value:!0}),t.updateMockerRecord=t.deleteMockerRecord=t.addMockerRecord=t.getMockerRecord=t.createMockerDatabase=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=o(0),d=void 0;t.createMockerDatabase=n,t.getMockerRecord=r,t.addMockerRecord=i,t.deleteMockerRecord=a,t.updateMockerRecord=u},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){window.XMLHttpRequest=v}function i(){Object.defineProperties(this,{_xmlHttpRequest:{writable:!1,enumerable:!1,configurable:!1},_listeners:{value:{}},_requestHeader:{value:{}},config:{value:{timeout:p.default.timeout,record:null}},onerror:{value:null},onload:{value:null},onloadend:{value:null},onloadstart:{value:null},onprogress:{value:null},onreadystatechange:{value:null},ontimeout:{value:null},readyState:{value:0,writable:!0},response:{value:"",writable:!0},responseText:{value:"",writable:!0},responseType:{value:""},responseURL:{value:""},responseXML:{value:null},status:{value:0,writable:!0},statusText:{value:"",writable:!0},timeout:{value:0}})}function a(){}function u(){}function s(e){return(0,f.getMockerRecord)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.resetXMLHttpRequest=t.MockerHttpRequest=void 0;var c=o(8),l=o(0),d=o(2),p=n(d),f=o(1),v=window.XMLHttpRequest,E=(window.ActiveXObject,{constructor:{value:i,configurable:!0,enumerable:!1,writable:!0},DONE:{value:4},HEADERS_RECEIVED:{value:2},LOADING:{value:3},OPENED:{value:1},UNSENT:{value:0},abort:{value:function(){this.readyState=E.UNSENT.value,this.dispatchEvent(new Event(l.XHR_EVENTS.ABORT)),this.dispatchEvent(new Event(l.XHR_EVENTS.ERROR))}},getAllResponseHeaders:{value:function(){}},getResponseHeader:{value:function(){}},onabort:{},onerror:{},onload:{},onloadend:{},onloadstart:{},onprogress:{},onreadystatechange:{},ontimeout:{},open:{value:function(e,t,o,n,r){this.config.open={method:e,url:t,async:"boolean"!=typeof o||o,username:n,password:r};var i=this;this.config.record=s({method:e,url:t}).then(function(e){return e&&(i.readyState=E.OPENED.value,i.dispatchEvent(new Event(l.XHR_EVENTS.READYSTATECHANGE))),e})}},overrideMimeType:{value:function(){}},readyState:{},response:{},responseText:{},responseType:{},responseURL:{},responseXML:{},send:{value:function(e){function t(){this.readyState=E.HEADERS_RECEIVED.value,this.dispatchEvent(new Event(l.XHR_EVENTS.READYSTATECHANGE)),this.readyState=E.LOADING.value,this.dispatchEvent(new Event(l.XHR_EVENTS.READYSTATECHANGE)),this.status=200,this.statusText=l.HTTP_STATUS_CODES[200],this.readyState=E.DONE.value,this.dispatchEvent(new Event(l.XHR_EVENTS.READYSTATECHANGE)),this.dispatchEvent(new Event(l.XHR_EVENTS.LOAD)),this.dispatchEvent(new Event(l.XHR_EVENTS.LOADEND))}var o=this;this.config.record.then(function(e){e&&(o.response=o.responseText=e.response,o.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),o.dispatchEvent(new Event(l.XHR_EVENTS.LOADSTART)),o.config.open.async===!0?window.setTimeout(t.bind(o),o.config.timeout):t.call(o))})}},setRequestHeader:{value:function(e,t){e in this._requestHeader?this._requestHeader[e]=","+t:this._requestHeader[e]=t}},status:{},statusText:{},timeout:{},upload:{}}),b={constructor:{value:a,configurable:!0,enumerable:!1,writable:!0},onabort:{},onerror:{},onload:{},onloadend:{},onloadstart:{},onprogress:{},ontimeout:{}},y={constructor:{value:u,configurable:!0,enumerable:!1,writable:!0},addEventListener:{value:function(e,t){return e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(t),t}},dispatchEvent:{value:function(e){if(e.type in this._listeners){var t=this._listeners[e.type];if("Array"===(0,c.getVariableType)(t))for(var o=0;o<t.length;o++)t[o].call(this,e)}}},removeEventListener:{value:function(e,t){if(e in this._listeners){var o=this._listeners[e];if("Array"===(0,c.getVariableType)(o))for(var n=0;n<o.length;n++)o[n]===t&&(o[n].splice(n,1),n--)}}}};i.prototype=(0,c.createPrototypeChain)(E,b,y),t.MockerHttpRequest=i,t.resetXMLHttpRequest=r},function(e,t,o){"use strict";function n(){return"object"!==i(arguments[0])?void console.error("原型链属性为对象类型"):1===arguments.length?Object.create(Object.prototype,arguments[0]):Object.create(n.apply(null,Array.prototype.slice.call(arguments,1)),arguments[0])}function r(e){return Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.createPrototypeChain=n,t.getVariableType=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(7);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),a=r(i),u=o(2),s=n(u),c=o(1),l=o(3),d={close:l.resetXMLHttpRequest,config:s.default,version:a.version,mock:function(){c.addMockerRecord.apply(this,arguments)}};window.XMLHttpRequest&&(window.XMLHttpRequest=l.MockerHttpRequest),window.mocker&&window.mocker.version===d.version||(window.mocker=d);try{(0,c.createMockerDatabase)()}catch(e){console.log(e)}t.default=d}]);
//# sourceMappingURL=mocker-min.1.0.0.js.map