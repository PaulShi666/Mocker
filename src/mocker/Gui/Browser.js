/**
 * Created by mac on 17/2/4.
 */

import browserHtml from './Browser.html';
import {getAllMockerRecord} from '../Data';

// 单例模式，因为视图仅出现一次

let MockerBrowser = {
    init: function () {

        let rootElement = document.createElement('div');
        rootElement.className = 'mocker';
        rootElement.innerHTML = browserHtml;

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
    setInitialStyle: function (rootElement) {
        if(window.mocker.status===0){
            rootElement.querySelector('.mocker-icon').classList.remove('opened');

        }else if(window.mocker.status ===1){
            rootElement.querySelector('.mocker-icon').classList.add('opened');
        }

    },
    switchStatus: function (rootElement, event) {

        if(window.mocker.status===0){
            rootElement.querySelector('.mocker-icon').classList.add('opened');
            window.mocker && window.mocker.open();

        }else if(window.mocker.status ===1){
            rootElement.querySelector('.mocker-icon').classList.remove('opened');
            window.mocker && window.mocker.close();
        }

    },
    switchAdd: function (rootElement, event) {
        if(rootElement.querySelector(".form-add").style.display === 'block'){
            rootElement.querySelector(".form-add").style.display = 'none';
        }else{
            rootElement.querySelector(".form-add").style.display = 'block';
            rootElement.querySelector(".list-panel").style.display = 'none';
        }

    },
    switchList: function (rootElement) {
        getAllMockerRecord().then(function (items) {
            if(rootElement.querySelector(".list-panel").style.display === 'block'){
                rootElement.querySelector(".list-panel").style.display = 'none';
            }else{
                rootElement.querySelector(".form-add").style.display = 'none';
                rootElement.querySelector(".list-panel").style.display = 'block';

                rootElement.querySelector('.mocker-list').innerHTML = items.map(function (ele, index, array) {
                    return `<tr>
                                <td>${ele.url}</td>
                                <td>${ele.method}</td>
                                <td>${ele.response}</td>
                            </tr>`

                });
            }

        });

    },
    handleSave: function (rootElement, event) {
        event.preventDefault();

        let formElement = rootElement.querySelector('.form-add');

        console.log(formElement.querySelector("input[name=url]").value);
        mocker.mock({
            url: formElement.querySelector("input[name=url]").value,
            method: formElement.querySelector("input[name=method]").value,
            response: formElement.querySelector("input[name=response]").value
        })
    }

};
export default MockerBrowser;
