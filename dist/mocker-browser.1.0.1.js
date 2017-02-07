/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Database = __webpack_require__(5);

Object.keys(_Database).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Database[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by mac on 17/1/20.
 */
// MockerHttpRequest

// 默认mock延迟时间
var MOCKERHTTPREQUEST_DELAY = exports.MOCKERHTTPREQUEST_DELAY = 0;
// 默认是否匹配到mock记录

var XHR_EVENTS = exports.XHR_EVENTS = {
    READYSTATECHANGE: "readystatechange",
    LOADSTART: "loadstart",
    PROGRESS: "progress",
    ABORT: "abort",
    ERROR: "error",
    LOAD: "load",
    TIMEOUT: "timeout",
    LOADEND: "loadend"
};

var HTTP_STATUS_CODES = exports.HTTP_STATUS_CODES = {
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

var MOCKER_DATABASE_NAME = exports.MOCKER_DATABASE_NAME = "MockerDatabase";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constant = __webpack_require__(1);

exports.default = {
    timeout: _constant.MOCKERHTTPREQUEST_DELAY
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MockerHttpRequest = __webpack_require__(6);

Object.keys(_MockerHttpRequest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MockerHttpRequest[key];
    }
  });
});
exports.default = _MockerHttpRequest.MockerHttpRequest; /**
                                                         * Created by mac on 17/1/20.
                                                         */

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"name": "Mocker",
	"version": "1.0.1",
	"description": "A mock data management tool",
	"main": "index.js",
	"scripts": {
		"dev": " NODE_ENV=development webpack-dev-server --hot  --config config/webpack.config.js",
		"build": "npm run clean && NODE_ENV=production webpack --config config/webpack.config.js",
		"clean": "rm -rf dist"
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
		"babel-core": "^6.22.1",
		"babel-loader": "^6.2.10",
		"babel-preset-es2015": "^6.22.0",
		"css-loader": "^0.26.1",
		"file-loader": "^0.10.0",
		"html-loader": "^0.4.4",
		"html-webpack-plugin": "^2.26.0",
		"url-loader": "^0.5.7",
		"webpack": "^2.2.1",
		"webpack-dev-server": "^1.16.2"
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateMockerRecord = exports.deleteMockerRecord = exports.addMockerRecord = exports.getAllMockerRecord = exports.getMockerRecord = exports.createMockerDatabase = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constant = __webpack_require__(1);

var db = void 0;

function createMockerDatabase() {

    //兼容性
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" };
    var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var request = window.indexedDB.open(_constant.MOCKER_DATABASE_NAME);
    request.onerror = function () {
        throw new Error("数据库创建失败");
    };

    request.onsuccess = function (event) {
        db = event.target.result;
    };

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        // 创建表结构
        var objectStore = db.createObjectStore("records", {
            keyPath: "id",
            autoIncrement: true
        });

        objectStore.createIndex("methodUrl", ["method", "url"], {
            unique: true
        });
    };
}
function getMockerRecord(o) {
    checkMockerRecord(o);

    var objectStore = db.transaction("records", "readonly").objectStore("records");

    return new Promise(function (resolve, reject) {
        // 根据索引查询
        objectStore.index('methodUrl').get([o.method, o.url]).onsuccess = function (e) {
            resolve(e.target.result);
        };
    });
}
function getAllMockerRecord(o) {
    var items = [];

    var objectStore = db.transaction("records", "readonly").objectStore("records");

    return new Promise(function (resolve, reject) {
        // 使用游标查询所有的数据
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                items.push(cursor.value);
                cursor.continue();
            } else {
                resolve(items);
            }
        };
    });
}
function addMockerRecord(o) {

    checkMockerRecord(o);

    var objectStore = db.transaction("records", "readwrite").objectStore("records");
    var request = objectStore.add({
        "method": o.method,
        "url": o.url,
        "response": o.response
    });
    request.onsuccess = function () {};
    request.onerror = function () {
        throw new Error("Mocker数据库添加失败");
    };
}

function deleteMockerRecord(o) {
    console.log(o.id);

    var objectStore = db.transaction("records", "readwrite").objectStore("records");

    return new Promise(function (resolve, reject) {
        // 根据索引查询
        objectStore.delete(o.id).onsuccess = function (e) {
            resolve(true);
        };
    });
}

function updateMockerRecord(o) {}

function checkMockerRecord(o) {
    // 检测输入参数
    if (!((typeof o === "undefined" ? "undefined" : _typeof(o)) === 'object' && typeof o.method === 'string' && typeof o.url === 'string' && /^(get|post)$/i.test(o.method))) {
        throw new Error('数据库mock参数非法');
    }
}

exports.createMockerDatabase = createMockerDatabase;
exports.getMockerRecord = getMockerRecord;
exports.getAllMockerRecord = getAllMockerRecord;
exports.addMockerRecord = addMockerRecord;
exports.deleteMockerRecord = deleteMockerRecord;
exports.updateMockerRecord = updateMockerRecord;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetXMLHttpRequest = exports.replaceXMLHttpRequest = exports.MockerHttpRequest = undefined;

var _util = __webpack_require__(8);

var _constant = __webpack_require__(1);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _Data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//保存原生XMLHttpRequest
/**
 * Created by mac on 17/1/20.
 */

var _XMLHttpRequest = window.XMLHttpRequest;
//保存原生ActiveXObject
var _ActiveXObject = window.ActiveXObject;

// 修改原生的XMLHttpRequest
function replaceXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        window.XMLHttpRequest = MockerHttpRequest;
    }
    if (window.mocker) {
        window.mocker.status = 1;
    }
}
// 恢复原生的XMLHttpRequest
function resetXMLHttpRequest() {
    window.XMLHttpRequest = _XMLHttpRequest;
    window.ActiveXObject = _ActiveXObject;
    if (window.mocker) {
        window.mocker.status = 0;
    }
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
                timeout: _config2.default.timeout,
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

var MockerHttpRequestPrototype = {
    constructor: {
        value: MockerHttpRequest,
        configurable: true,
        enumerable: false,
        writable: true
    },
    DONE: { value: 4 },
    HEADERS_RECEIVED: { value: 2 },
    LOADING: { value: 3 },
    OPENED: { value: 1 },
    UNSENT: { value: 0 },
    abort: {
        value: function value() {
            this.readyState = MockerHttpRequestPrototype.UNSENT.value;
            this.dispatchEvent(new Event(_constant.XHR_EVENTS.ABORT));
            this.dispatchEvent(new Event(_constant.XHR_EVENTS.ERROR));
        }
    },
    getAllResponseHeaders: {
        value: function value() {}
    },
    getResponseHeader: {
        value: function value() {}
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
        value: function value(method, url, async, username, password) {

            // 序列化请求
            this.config.open = {
                method: method,
                url: url,
                async: typeof async === 'boolean' ? async : true,
                username: username,
                password: password
            };

            var that = this;

            //在Mock Indexdb记录中查询
            this.config.record = find({ method: method, url: url }).then(function (item) {

                if (!item) {
                    //在Mock记录中没有查询到

                } else {
                    //在Mock记录中查询到

                    that.readyState = MockerHttpRequestPrototype.OPENED.value;
                    that.dispatchEvent(new Event(_constant.XHR_EVENTS.READYSTATECHANGE));
                }
                return item;
            });
        }
    },
    overrideMimeType: {
        value: function value() {}
    },
    readyState: {},
    response: {},
    responseText: {},
    responseType: {},
    responseURL: {},
    responseXML: {},
    send: {
        value: function value(data) {

            // 序列化请求

            var that = this;

            this.config.record.then(function (item) {
                //已经在open 时使用Mock Indexdb记录中查询

                if (!item) {
                    //在Mock记录中没有查询到
                } else {
                    //在Mock记录中查询到
                    that.response = that.responseText = item.response;

                    that.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');
                    that.dispatchEvent(new Event(_constant.XHR_EVENTS.LOADSTART));

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
                this.dispatchEvent(new Event(_constant.XHR_EVENTS.READYSTATECHANGE));

                this.readyState = MockerHttpRequestPrototype.LOADING.value;
                this.dispatchEvent(new Event(_constant.XHR_EVENTS.READYSTATECHANGE));

                this.status = 200;

                this.statusText = _constant.HTTP_STATUS_CODES[200];

                this.readyState = MockerHttpRequestPrototype.DONE.value;

                this.dispatchEvent(new Event(_constant.XHR_EVENTS.READYSTATECHANGE));
                this.dispatchEvent(new Event(_constant.XHR_EVENTS.LOAD));
                this.dispatchEvent(new Event(_constant.XHR_EVENTS.LOADEND));
            }
        }
    },
    setRequestHeader: {
        value: function value(key, _value) {
            if (key in this._requestHeader) {
                this._requestHeader[key] = ',' + _value;
            } else {
                this._requestHeader[key] = _value;
            }
        }
    },
    status: {},
    statusText: {},
    timeout: {},
    upload: {}
};

function MockXMLHttpRequestEventTarget() {}

var MockXMLHttpRequestEventTargetPrototype = {
    constructor: {
        value: MockXMLHttpRequestEventTarget,
        configurable: true,
        enumerable: false,
        writable: true
    },
    onabort: {},
    onerror: {},
    onload: {},
    onloadend: {},
    onloadstart: {},
    onprogress: {},
    ontimeout: {}
};
function MockEventTarget() {}
var MockEventTargetPrototype = {
    constructor: {
        value: MockEventTarget,
        configurable: true,
        enumerable: false,
        writable: true
    },
    addEventListener: {
        value: function value(type, callback) {
            // type = 'on' + type;

            if (!(type in this._listeners)) {
                this._listeners[type] = [];
            }

            this._listeners[type].push(callback);

            // 把回调函数返回，方便移除
            return callback;
        }
    },
    dispatchEvent: {
        value: function value(event) {
            if (!(event.type in this._listeners)) {
                return;
            }

            var stack = this._listeners[event.type];

            if ((0, _util.getVariableType)(stack) !== 'Array') {
                return;
            }
            // 事件目标改写
            // event.target = this;

            for (var i = 0; i < stack.length; i++) {
                stack[i].call(this, event);
            }
        }
    },
    removeEventListener: {
        value: function value(type, callback) {
            if (!(type in this._listeners)) {
                return;
            }

            var stack = this._listeners[type];

            if ((0, _util.getVariableType)(stack) !== 'Array') {
                return;
            }

            for (var i = 0; i < stack.length; i++) {
                if (stack[i] === callback) {
                    stack[i].splice(i, 1);
                    i--;
                }
            }
        }
    }
};
function find(o) {
    return (0, _Data.getMockerRecord)(o);
}

//MockerHttpRequest原型链模拟
MockerHttpRequest.prototype = (0, _util.createPrototypeChain)(MockerHttpRequestPrototype, MockXMLHttpRequestEventTargetPrototype, MockEventTargetPrototype);

exports.MockerHttpRequest = MockerHttpRequest;
exports.replaceXMLHttpRequest = replaceXMLHttpRequest;
exports.resetXMLHttpRequest = resetXMLHttpRequest;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by mac on 17/1/20.
 */

//使用Object.create建立原型链继承关系
function createPrototypeChain() {
    // console.log(arguments);
    if (_typeof(arguments[0]) !== 'object') {
        console.error('原型链属性为对象类型');
        return;
    }

    if (arguments.length === 1) {
        return Object.create(Object.prototype, arguments[0]);
    } else {
        return Object.create(createPrototypeChain.apply(null, Array.prototype.slice.call(arguments, 1)), arguments[0]);
    }
}

// 获取精确类型
function getVariableType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

exports.createPrototypeChain = createPrototypeChain;
exports.getVariableType = getVariableType;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(7);

Object.keys(_Util).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Util[key];
    }
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Browser = __webpack_require__(10);

var _Browser2 = _interopRequireDefault(_Browser);

var _Data = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 单例模式，因为视图仅出现一次

/**
 * Created by mac on 17/2/4.
 */

var MockerBrowser = {
    init: function init() {

        var rootElement = document.createElement('div');
        rootElement.className = 'mocker';
        rootElement.innerHTML = _Browser2.default;

        document.body.appendChild(rootElement);

        // 初始化样式
        this.setInitialStyle(rootElement);

        // 激活工具面板
        rootElement.querySelector('.mocker-switch-btn').onclick = this.switchStatus.bind(this, rootElement);

        // 增加数据面板
        rootElement.querySelector(".mocker-table .add").onclick = this.switchAdd.bind(this, rootElement);
        // 查看数据列表
        rootElement.querySelector(".mocker-table .list").onclick = this.switchList.bind(this, rootElement);
        // 保存新的数据
        rootElement.querySelector(".mocker-table .save").onclick = this.handleSave.bind(this, rootElement);
    },
    setInitialStyle: function setInitialStyle(rootElement) {
        if (window.mocker.status === 0) {
            rootElement.querySelector('.mocker-icon').classList.remove('opened');
        } else if (window.mocker.status === 1) {
            rootElement.querySelector('.mocker-icon').classList.add('opened');
        }
    },
    switchStatus: function switchStatus(rootElement, event) {

        if (window.mocker.status === 0) {
            rootElement.querySelector('.mocker-icon').classList.add('opened');
            window.mocker && window.mocker.open();
        } else if (window.mocker.status === 1) {
            rootElement.querySelector('.mocker-icon').classList.remove('opened');
            window.mocker && window.mocker.close();
        }
    },
    switchAdd: function switchAdd(rootElement, event) {
        if (rootElement.querySelector(".form-add").style.display === 'block') {
            rootElement.querySelector(".form-add").style.display = 'none';
        } else {
            rootElement.querySelector(".form-add").style.display = 'block';
            rootElement.querySelector(".list-panel").style.display = 'none';
        }
    },
    switchList: function switchList(rootElement) {
        var that = this;

        (0, _Data.getAllMockerRecord)().then(function (items) {
            if (rootElement.querySelector(".list-panel").style.display === 'block') {
                rootElement.querySelector(".list-panel").style.display = 'none';
            } else {
                rootElement.querySelector(".form-add").style.display = 'none';
                rootElement.querySelector(".list-panel").style.display = 'block';

                rootElement.querySelector('.mocker-list').innerHTML = items.map(function (ele, index, array) {
                    return '<tr>\n                                \n                                <td>' + ele.url + '</td>\n                                <td>' + ele.method + '</td>\n                                <td>' + ele.response + '</td>\n                                <td><button data-id="' + ele.id + '"  class="delete ">\u5220\u9664</button></td>\n                            </tr>';
                }).join('');

                rootElement.querySelectorAll('.delete').forEach(function (node) {
                    node.addEventListener('click', function (e) {
                        var that = this;

                        (0, _Data.deleteMockerRecord)({
                            id: Number(e.target.dataset.id)
                        }).then(function (res) {
                            document.querySelector('.mocker-list').removeChild(that.parentNode.parentNode);
                            console.log(res);
                        });
                    });
                });
            }
        });
    },
    handleSave: function handleSave(rootElement, event) {
        event.preventDefault();

        var formElement = rootElement.querySelector('.form-add');

        mocker.mock({
            url: formElement.querySelector("input[name=url]").value,
            method: formElement.querySelector("input[name=method]").value,
            response: formElement.querySelector("input[name=response]").value
        });

        // 保存后开启mocker
        if (window.mocker.status === 0) {
            rootElement.querySelector('.mocker-icon').classList.add('opened');
            window.mocker && window.mocker.open();
        }
    }

};
exports.default = MockerBrowser;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<style>\n    .mocker {\n\n    }\n\n    .mocker .mocker-container {\n        border-radius: 10px;\n        position: fixed;\n        background: #F0F0F0;\n        right: 10px;\n        top: 10px;\n        text-align: center;\n        padding: 5px;\n    }\n\n    .mocker .mocker-icon {\n        fill: #334ff9;\n    }\n\n    .mocker .mocker-icon.opened {\n        fill: #fd0000;\n    }\n\n    .mocker .mocker-switch-btn {\n        border: none;\n        background: transparent;\n\n        padding: 5px 10px;\n        margin: 0;\n        outline: none;\n    }\n\n    .mocker .mocker-table {\n\n    }\n\n</style>\n<script>\n\n</script>\n<div class=\"mocker-container\">\n    <button class=\"mocker-switch-btn\">\n        <svg class=\"mocker-icon\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n            <path d=\"M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z\"></path>\n        </svg>\n    </button>\n    <div class=\"mocker-table\">\n\n        <button class=\"add\">增加</button>\n        <button class=\"list\">数据</button>\n\n        <form style=\"display: none\" action=\"\" class=\"form-add\">\n            <p>\n                <label>\n                    <input placeholder=\"请求路径\" type=\"text\" name=\"url\"/>\n                </label>\n            </p>\n            <p>\n                <label>\n                    <input type=\"radio\" name=\"method\" value=\"get\">get\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"method\" value=\"post\">post\n                </label>\n            </p>\n\n            <p>\n                <input placeholder=\"响应数据\" name=\"response\" type=\"text\">\n            </p>\n\n            <button class=\"save\">保存</button>\n        </form>\n\n        <table style=\"display: none\" class=\"list-panel\">\n            <thead>\n            <tr>\n                <td>路径</td>\n                <td>方式</td>\n                <td>响应</td>\n                <td>操作</td>\n            </tr>\n            </thead>\n            <tbody class=\"mocker-list\">\n\n            </tbody>\n        </table>\n    </div>\n</div>\n";

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _package = __webpack_require__(4);

var npmPackage = _interopRequireWildcard(_package);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _Data = __webpack_require__(0);

var _MockerHttpRequest = __webpack_require__(3);

var _Browser = __webpack_require__(9);

var _Browser2 = _interopRequireDefault(_Browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 初始化Mocker
var mocker = {
    open: _MockerHttpRequest.replaceXMLHttpRequest,
    close: _MockerHttpRequest.resetXMLHttpRequest,
    status: 0,
    config: _config2.default,
    version: npmPackage.version,
    mock: function mock() {
        _Data.addMockerRecord.apply(this, arguments);
    }
};

// 给window对象增加mocker接口
/**
 * Created by mac on 17/1/17.
 */

if (!window.mocker || window.mocker.version !== mocker.version) {
    window.mocker = mocker;
}

//初始化Mocker对应数据库
try {
    (0, _Data.createMockerDatabase)();
} catch (e) {
    console.log('初始化Mocker数据库失败', e);
}

// 初始化MockerBrowser
try {
    _Browser2.default.init();
} catch (e) {
    console.log('初始化MockerGui失败', e);
}

exports.default = mocker;

/***/ })
/******/ ]);
//# sourceMappingURL=mocker-browser.1.0.1.js.map