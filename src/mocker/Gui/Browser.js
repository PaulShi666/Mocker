/**
 * Created by mac on 17/2/4.
 */

import browserHtml from './Browser.html';
import {getMockerRecord} from '../Data';

let MockerBrowser = {
    init: function () {

        let rootElement = document.createElement('div');
        rootElement.className = 'mocker';
        rootElement.innerHTML = browserHtml;

        document.body.appendChild(rootElement);

        // 初始化样式
        rootElement.querySelector('.mocker-icon').classList.add('closed');

        // 激活工具面板
        rootElement.querySelector('.mocker-switch-btn').onclick = function (event) {
            console.log(event)
        };
        // 增加数据面板
        rootElement.querySelector(".mocker-table .add").onclick = function (event) {
            console.log(event)
        };
        // 查看数据列表
        rootElement.querySelector(".mocker-table .list").onclick = function (event) {
            getMockerRecord({method: '', url: ''}).then(function (item) {
                console.log(item)

            });
            let element = `<tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>`
            rootElement.querySelector('.mocker-list').innerHTML = item;
        }

        // 保存新的数据
        rootElement.querySelector(".mocker-table .save").onclick = function (event) {
            event.preventDefault();

            let formElement = rootElement.querySelector('.form-add');

            console.log(formElement.querySelector("input[name=url]").value);
            mocker.mock({
                url: formElement.querySelector("input[name=url]").value,
                method: formElement.querySelector("input[name=method]").value,
                response: formElement.querySelector("input[name=response]").value
            })
        }


    }
};
export default MockerBrowser;
