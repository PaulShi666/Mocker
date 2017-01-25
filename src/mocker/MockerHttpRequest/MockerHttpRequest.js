/**
 * Created by mac on 17/1/20.
 */

import {createPrototypeChain, getVariableType} from '../util';
import {XHR_EVENTS, HTTP_STATUS_CODES} from '../constant';
import mockerConfig from '../config';
import {getMockerRecord} from '../Data';

//保存原生XMLHttpRequest
const _XMLHttpRequest = window.XMLHttpRequest;
//保存原生ActiveXObject
const _ActiveXObject = window.ActiveXObject;

//自定义XHR对象构造器
function MockerHttpRequest() {

    Object.defineProperties(this, {
        _xmlHttpRequest: {
            // value:new _XMLHttpRequest(arguments),
            // writable: false,
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
                timeout: mockerConfig.timeout,
                // 数据库mock记录（延迟对象）
                record: null
                // match: mockerConfig.match
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

// MockerHttpRequest.prototype =
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
            this.dispatchEvent(new Event(XHR_EVENTS.ABORT));
            this.dispatchEvent(new Event(XHR_EVENTS.ERROR));
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
                        //resolve(false);
                        //that.config.match = false;

                    } else {
                        //在Mock记录中查询到
                        //that.config.match = true;
                        //resolve(true);
                        //that.config.xhr = item;

                        that.readyState = MockerHttpRequestPrototype.OPENED.value;
                        that.dispatchEvent(new Event(XHR_EVENTS.READYSTATECHANGE));
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
                    that.dispatchEvent(new Event(XHR_EVENTS.LOADSTART));

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
                this.dispatchEvent(new Event(XHR_EVENTS.READYSTATECHANGE));

                this.readyState = MockerHttpRequestPrototype.LOADING.value;
                this.dispatchEvent(new Event(XHR_EVENTS.READYSTATECHANGE));

                this.status = 200;

                this.statusText = HTTP_STATUS_CODES[200];

                this.readyState = MockerHttpRequestPrototype.DONE.value;

                this.dispatchEvent(new Event(XHR_EVENTS.READYSTATECHANGE));
                this.dispatchEvent(new Event(XHR_EVENTS.LOAD));
                this.dispatchEvent(new Event(XHR_EVENTS.LOADEND));

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

            if (getVariableType(stack) !== 'Array') {
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

            if (getVariableType(stack) !== 'Array') {
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
    return getMockerRecord(o);
}

//MockerHttpRequest原型链模拟
// MockerHttpRequest.prototype = createPrototypeChain(
//     MockerHttpRequestPrototype,
//     MockXMLHttpRequestEventTargetPrototype,
//     MockEventTargetPrototype
// );

MockerHttpRequest.prototype = Object.create(
    Object.create(
        Object.create(Object.prototype, MockEventTargetPrototype)
        , MockXMLHttpRequestEventTargetPrototype)
    , MockerHttpRequestPrototype);

export {MockerHttpRequest};