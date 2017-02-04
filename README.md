#Mocker


Mocker is a simulation tool colletion to increase front-end developers' efficiency including generating mock data,simulating HttpRequest,etc..
Front-end developer can develop an application using Mocker without running bank-end service.

Demo:<https://paulshi666.github.io/Mocker/dist/demo/>

Api document:<https://github.com/PaulShi666/Mocker/wiki>

The official site: <https://paulshi666.github.io/Mocker/>

## Features

* can save numerous mock data Using IndexedDB Database
* accurately simulate ajax requests(timeout,readystate,status...etc)
* using Promise Object,ES6 modules to increase code efficiency
* separate constant config module so you can pack this tool with your won config

This tool in some way refers to existing Mocking Libraries [nuysoft/Mock](https://github.com/nuysoft/Mock/tree/refactoring),[mennovanslooten/mockJSON](https://github.com/mennovanslooten/mockJSON),[sinonjs/sinon](https://github.com/sinonjs/sinon)

## Questions?
having any questions? please contact me(1976727209@qq.com) or leave your quesion here [New Issue](https://github.com/PaulShi666/Mocker/issues/new).

##To Do List
Sprint 1(done)
* 保存接口Mock数据
* 拦截Ajax请求，返回Mock数据
* 浏览器js库
* 浏览器端即成

Sprint 2
* 数据编辑器
* 集成至chrome浏览器插件

Sprint 3
* Mock数据规则表，随机生成数据

Sprint 4
* Node端集成工具
* Webpack端集成工具