/**
 * Created by mac on 17/1/20.
 */
// MockerHttpRequest

// 默认mock延迟时间
export const MOCKERHTTPREQUEST_DELAY = 0;
// 默认是否匹配到mock记录
// export const MOCKERHTTPREQUEST_MATCH = false;

export const XHR_EVENTS = {
    READYSTATECHANGE: "readystatechange",
    LOADSTART: "loadstart",
    PROGRESS: "progress",
    ABORT: "abort",
    ERROR: "error",
    LOAD: "load",
    TIMEOUT: "timeout",
    LOADEND: "loadend"
};

export const HTTP_STATUS_CODES = {
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

export const MOCKER_DATABASE_NAME = "MockerDatabase";