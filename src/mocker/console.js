/**
 * Created by mac on 17/1/17.
 */

import * as npmPackage from '../../package.json';
import mockerConfig from './config';

import {createMockerDatabase, addMockerRecord} from './Data';
import {
    replaceXMLHttpRequest,
    resetXMLHttpRequest,
} from './MockerHttpRequest';

// 初始化Mocker
const mocker = {
    open:replaceXMLHttpRequest,
    close: resetXMLHttpRequest,
    status:0,
    config: mockerConfig,
    version: npmPackage.version,
    mock: function () {
        addMockerRecord.apply(this, arguments);
    }
};


// 给window对象增加mocker接口
if (!window.mocker || window.mocker.version !== mocker.version) {
    window.mocker = mocker;
}

//初始化Mocker对应数据库
try {
    createMockerDatabase();
} catch (e) {
    console.log('初始化Mocker数据库失败',e);
}


export default mocker