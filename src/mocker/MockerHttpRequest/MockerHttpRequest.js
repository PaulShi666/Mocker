/**
 * Created by mac on 17/1/20.
 */

import Util from '../util';
import {MOCKERHTTPREQUEST_DELAY} from '../constant';


//保存原生XMLHttpRequest
const _XMLHttpRequest = window.XMLHttpRequest;
//保存原生ActiveXObject
const _ActiveXObject = window.ActiveXObject;

//自定义XHR对象构造器
function MockerHttpRequest() {
    this.config = {
        delay: MOCKERHTTPREQUEST_DELAY
    };
    this._xmlHttpRequest = new XMLHttpRequest(arguments);
}

// MockerHttpRequest.prototype =
let MockerHttpRequestPrototype = {
    constructor: MockerHttpRequest,
    DONE: {value: 4},
    HEADERS_RECEIVED: {value: 2},
    LOADING: {value: 3},
    OPENED: {value: 1},
    UNSENT: {value: 0},
    abort: {
        value: () => {
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
        value: () => {
        }
    },
    overrideMimeType: {
        value: () => {
        }
    },
    readyState: {},
    response: {},
    responseText: {},
    responseType: {},
    responseURL: {},
    responseXML: {},
    send: {
        value: () => {
        }
    },
    setRequestHeader: {
        value: () => {
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
        value: () => {
        }
    },
    dispatchEvent: {
        value: () => {
        }
    },
    removeEventListener: {
        value: () => {
        }
    }
};

//MockerHttpRequest原型链模拟
MockerHttpRequest.prototype =
    Object.create(
        Object.create(
            Object.create(
                MockEventTargetPrototype)
            , MockXMLHttpRequestEventTargetPrototype)
        , MockerHttpRequestPrototype);

export {MockerHttpRequest};