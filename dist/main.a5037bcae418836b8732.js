/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by mac on 17/1/20.
 */
// MockerHttpRequest

// 默认mock延迟时间
const MOCKERHTTPREQUEST_DELAY = 0;
/* harmony export (immutable) */ __webpack_exports__["d"] = MOCKERHTTPREQUEST_DELAY;

// 默认是否匹配到mock记录

const XHR_EVENTS = {
    READYSTATECHANGE: "readystatechange",
    LOADSTART: "loadstart",
    PROGRESS: "progress",
    ABORT: "abort",
    ERROR: "error",
    LOAD: "load",
    TIMEOUT: "timeout",
    LOADEND: "loadend"
};
/* harmony export (immutable) */ __webpack_exports__["b"] = XHR_EVENTS;


const HTTP_STATUS_CODES = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choice",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    422: "Unprocessable Entity",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
};
/* harmony export (immutable) */ __webpack_exports__["c"] = HTTP_STATUS_CODES;


const MOCKER_DATABASE_NAME = "MockerDatabase";
/* harmony export (immutable) */ __webpack_exports__["a"] = MOCKER_DATABASE_NAME;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Database__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Database__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Database__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__Database__["c"]; });
/**
 * Created by mac on 17/1/24.
 */



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = {
        timeout:__WEBPACK_IMPORTED_MODULE_0__constant__["d" /* MOCKERHTTPREQUEST_DELAY */],
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockerHttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetXMLHttpRequest; });
/**
 * Created by mac on 17/1/20.
 */






//保存原生XMLHttpRequest
const _XMLHttpRequest = window.XMLHttpRequest;
//保存原生ActiveXObject
const _ActiveXObject = window.ActiveXObject;

function resetXMLHttpRequest() {
    window.XMLHttpRequest = _XMLHttpRequest;
}

//自定义XHR对象构造器
function MockerHttpRequest() {

    Object.defineProperties(this, {
        _xmlHttpRequest: {
            writable: false,
            enumerable: false,
            configurable: false
        },
        _listeners: {
            value: {}
        },
        _requestHeader: {
            value: {}

        },
        config: {
            value: {
                timeout: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].timeout,
                // 数据库mock记录（延迟对象）
                record: null
            }
        },
        onerror: {
            value: null
        },
        onload: {
            value: null
        },
        onloadend: {
            value: null
        },
        onloadstart: {
            value: null
        },
        onprogress: {
            value: null

        },
        onreadystatechange: {
            value: null
        },
        ontimeout: {
            value: null
        },
        readyState: {
            value: 0,
            writable: true
        },
        response: {
            value: '',
            writable: true
        },
        responseText: {
            value: '',
            writable: true
        },
        responseType: {
            value: ''
        },
        responseURL: {
            value: ''
        },
        responseXML: {
            value: null
        },
        status: {
            value: 0,
            writable: true
        },
        statusText: {
            value: "",
            writable: true

        },
        timeout: {
            value: 0

        }
    });

}

let MockerHttpRequestPrototype = {
    constructor: {
        value: MockerHttpRequest
    },
    DONE: {value: 4},
    HEADERS_RECEIVED: {value: 2},
    LOADING: {value: 3},
    OPENED: {value: 1},
    UNSENT: {value: 0},
    abort: {
        value: function () {
            this.readyState = MockerHttpRequestPrototype.UNSENT.value;
            this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].ABORT));
            this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].ERROR));
        }
    },
    getAllResponseHeaders: {
        value: () => {
        }
    },
    getResponseHeader: {
        value: () => {
        }
    },
    onabort: {},
    onerror: {},
    onload: {},
    onloadend: {},
    onloadstart: {},
    onprogress: {},
    onreadystatechange: {},
    ontimeout: {},
    open: {
        //推荐不要用箭头函数,词法作用域错误
        value: function (method, url, async, username, password) {


            // 序列化请求
            this.config.open = {
                method: method,
                url: url,
                async: typeof async === 'boolean' ? async : true,
                username: username,
                password: password
            };

            let that = this;

            //在Mock Indexdb记录中查询
            this.config.record = find({method: method, url: url})
                .then(function (item) {

                    if (!item) {
                        //在Mock记录中没有查询到


                    } else {
                        //在Mock记录中查询到

                        that.readyState = MockerHttpRequestPrototype.OPENED.value;
                        that.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].READYSTATECHANGE));
                    }
                    return item;
                });


        }
    },
    overrideMimeType: {
        value: function () {
        }
    },
    readyState: {},
    response: {},
    responseText: {},
    responseType: {},
    responseURL: {},
    responseXML: {},
    send: {
        value: function (data) {


            // 序列化请求

            let that = this;

            this.config.record.then(function (item) {
                //已经在open 时使用Mock Indexdb记录中查询

                if (!item) {
                    //在Mock记录中没有查询到
                } else {
                    //在Mock记录中查询到
                    that.response = that.responseText = item.response;

                    that.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');
                    that.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].LOADSTART));

                    //使用settimeout模拟异步
                    if (that.config.open.async === true) {
                        window.setTimeout(done.bind(that), that.config.timeout);
                    } else {
                        done.call(that);
                    }

                }

            });


            function done() {
                this.readyState = MockerHttpRequestPrototype.HEADERS_RECEIVED.value;
                this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].READYSTATECHANGE));

                this.readyState = MockerHttpRequestPrototype.LOADING.value;
                this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].READYSTATECHANGE));

                this.status = 200;

                this.statusText = __WEBPACK_IMPORTED_MODULE_1__constant__["c" /* HTTP_STATUS_CODES */][200];

                this.readyState = MockerHttpRequestPrototype.DONE.value;

                this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].READYSTATECHANGE));
                this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].LOAD));
                this.dispatchEvent(new Event(__WEBPACK_IMPORTED_MODULE_1__constant__["b" /* XHR_EVENTS */].LOADEND));

            }


        }
    },
    setRequestHeader: {
        value: function (key, value) {
            if (key in this._requestHeader) {
                this._requestHeader[key] = ',' + value;
            } else {
                this._requestHeader[key] = value;
            }
        }
    },
    status: {},
    statusText: {},
    timeout: {},
    upload: {}
};

function MockXMLHttpRequestEventTarget() {
}

let MockXMLHttpRequestEventTargetPrototype = {
    constructor: {
        value: MockXMLHttpRequestEventTarget
    },
    onabort: {},
    onerror: {},
    onload: {},
    onloadend: {},
    onloadstart: {},
    onprogress: {},
    ontimeout: {},
};
function MockEventTarget() {

}
let MockEventTargetPrototype = {
    constructor: {
        value: MockEventTarget
    },
    addEventListener: {
        value: function (type, callback) {
            // type = 'on' + type;

            if (!(type in this._listeners)) {
                this._listeners[type] = []
            }

            this._listeners[type].push(callback);

            // 把回调函数返回，方便移除
            return callback;
        }
    },
    dispatchEvent: {
        value: function (event) {
            if (!(event.type in this._listeners)) {
                return;
            }

            let stack = this._listeners[event.type];

            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* getVariableType */])(stack) !== 'Array') {
                return;
            }
            // 事件目标改写
            // event.target = this;

            for (let i = 0; i < stack.length; i++) {
                stack[i].call(this, event);
            }
        }
    },
    removeEventListener: {
        value: function (type, callback) {
            if (!(type in this._listeners)) {
                return;
            }

            let stack = this._listeners[type];

            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* getVariableType */])(stack) !== 'Array') {
                return;
            }

            for (let i = 0; i < stack.length; i++) {
                if (stack[i] === callback
                ) {
                    stack[i].splice(i, 1);
                    i--;
                }
            }
        }
    }
};
function find(o) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Data__["c" /* getMockerRecord */])(o);
}

//MockerHttpRequest原型链模拟
MockerHttpRequest.prototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* createPrototypeChain */])(
    MockerHttpRequestPrototype,
    MockXMLHttpRequestEventTargetPrototype,
    MockEventTargetPrototype
);






/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"name": "Mocker",
	"version": "1.0.0",
	"description": "A mock data management tool",
	"main": "index.js",
	"scripts": {
		"dev": " NODE_ENV=development webpack-dev-server --config config/webpack.config.js",
		"build": "rm -rf dist && NODE_ENV=production webpack --config config/webpack.config.js",
		"test": "npm run test"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/PaulShi666/Mocker.git"
	},
	"keywords": [
		"mock",
		"Http"
	],
	"author": "Paul",
	"license": "ISC",
	"bugs": {
		"url": "https://github.com/PaulShi666/Mocker/issues"
	},
	"homepage": "https://github.com/PaulShi666/Mocker#readme",
	"devDependencies": {
		"html-webpack-plugin": "^2.26.0",
		"webpack": "^2.2.0-rc.6",
		"webpack-dev-server": "^1.16.2"
	}
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MockerHttpRequest__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MockerHttpRequest__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__MockerHttpRequest__["a"]; });
/**
 * Created by mac on 17/1/20.
 */


/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__MockerHttpRequest__["a" /* MockerHttpRequest */];



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createMockerDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMockerRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMockerRecord; });
/* unused harmony export deleteMockerRecord */
/* unused harmony export updateMockerRecord */


let db;

function createMockerDatabase() {

    //兼容性
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    let IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"};
    let IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    let request = window.indexedDB.open(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* MOCKER_DATABASE_NAME */]);
    request.onerror = function () {
        throw new Error("数据库创建失败")
    };

    request.onsuccess = function (event) {
        db = event.target.result;
    };

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        // 创建表结构
        let objectStore = db.createObjectStore("records", {
            keyPath: "id",
            autoIncrement: true
        });

        objectStore.createIndex("methodUrl", ["method", "url"], {
            unique: true
        });

    }


}
function getMockerRecord(o) {
    checkMockerRecord(o);

    let objectStore = db.transaction("records", "readonly").objectStore("records");

    return new Promise(function (resolve, reject) {
        // 根据索引查询
        objectStore.index('methodUrl').get([o.method, o.url]).onsuccess = function (e) {
            resolve(e.target.result);
        }
    });


}
function addMockerRecord(o) {

    checkMockerRecord(o);

    let objectStore = db.transaction("records", "readwrite").objectStore("records");
    let request = objectStore.add({
        "method": o.method,
        "url": o.url,
        "response": o.response
    });
    request.onsuccess = function () {

    };
    request.onerror = function () {
        throw new Error("Mocker数据库添加失败");
    }

}

function deleteMockerRecord(o) {

}

function updateMockerRecord(o) {

}

function checkMockerRecord(o) {
    // 检测输入参数
    if (!(typeof o === 'object' &&
        typeof o.method === 'string' &&
        typeof o.url === 'string' &&
        /^(get|post)$/i.test(o.method))
    ) {
        throw new Error('数据库mock参数非法')
    }
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPrototypeChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVariableType; });
/**
 * Created by mac on 17/1/20.
 */

//使用Object.create建立原型链继承关系
function createPrototypeChain() {
    console.log(arguments);
    if (typeof arguments[0] !== 'object') {
        console.error('原型链属性为对象类型');
        return;
    }

    if (arguments.length === 1) {
        return Object.create(Object.prototype, arguments[0]);
    } else {
        return Object.create(
            createPrototypeChain.apply(null, Array.prototype.slice.call(arguments, 1)),
            arguments[0]
        );
    }
}

// 获取精确类型
function getVariableType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Util__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Util__["b"]; });
/**
 * Created by mac on 17/1/20.
 */


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MockerHttpRequest__ = __webpack_require__(5);
/**
 * Created by mac on 17/1/17.
 */







// 初始化Mocker
const mocker = {
    close: __WEBPACK_IMPORTED_MODULE_3__MockerHttpRequest__["a" /* resetXMLHttpRequest */],
    config: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */],
    version: __WEBPACK_IMPORTED_MODULE_0__package_json__["version"],
    mock: function () {
        __WEBPACK_IMPORTED_MODULE_2__Data__["a" /* addMockerRecord */].apply(this, arguments);
    }
};

// 修改原生的XMLHttpRequest
if (window.XMLHttpRequest) {
    window.XMLHttpRequest = __WEBPACK_IMPORTED_MODULE_3__MockerHttpRequest__["b" /* MockerHttpRequest */];
}

// 给window对象增加mocker接口
if (!window.mocker || window.mocker.version !== mocker.version) {
    window.mocker = mocker;
}

//初始化Mocker对应数据库
try {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Data__["b" /* createMockerDatabase */])();
} catch (e) {
    console.log(e);
}

/* harmony default export */ __webpack_exports__["default"] = mocker;

/***/ })
/******/ ]);