/**
 * Created by mac on 17/2/4.
 */

import browserHtml from './Browser.html';
import browserStyle from './Browser.css';


const MockerBrowser = {
    init: function () {

        let rootElement = document.createElement('div');
        rootElement.className = 'Mocker';

        rootElement.innerHTML = browserHtml;
        console.log(rootElement);

        // document.body.appendChild(rootElement);

    }
};
export default MockerBrowser;
