javascript:(function(){

    window.tabTitle = {};

    window.tabTitle.open = () => {
        let currentTitle = document.title;
        let modal = document.createElement('div');
        let bgColor = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

        let textColorEl = document.querySelector('p');
        textColorEl = textColorEl ? textColorEl : document.body;

        let color = window.getComputedStyle( textColorEl ,null).getPropertyValue('color');

        if (bgColor === 'rgba(0, 0, 0, 0)') {
            bgColor = '#232323';
            color = '#fefefe';
        }

        modal.innerHTML = 
            '<div style="background-color: ' + bgColor + ';' +
            '            color: ' + color + ';' + 
            '            border: 1px solid #999999;' +
            '            position: fixed;' +
            '            z-index: 9999 !important;' +
            '            top: 20%; ' +
            '            left: 50%; ' +
            '            margin-right: -50%;' + 
            '            transform: translate(-50%, -50%);' +
            '            padding: 12px;' +
            '            width: 40%;">' +
            '<h4 style="color: ' + color + '; font-size: 18px !important; padding-bottom: 10px !important;">Tab Title</h4>' +
            '<input style="width: 75%" id="tab-title" type="text" value="' + currentTitle + '"></input>' +
            '<br><br>' +
            '<ul style="margin:0px; margin-bottom: 5px; padding:0px;">' +
            '    <li style="list-style: none; display: inline">' +
            '        <input id="tab-title-save" type="button" value="Save"/>' +
            '    </li>' +
            '    <li style="list-style: none; display: inline">' +
            '        <input id="tab-title-cancel" type="button" value="Cancel"/>' +
            '    </li>' +
            '</ul>' +
            '</div>';

        window.tabTitle.modal = modal;
        document.body.appendChild(modal);

        document.getElementById('tab-title-save').onclick = () => {window.tabTitle.save(); };
        document.getElementById('tab-title-cancel').onclick = () => {window.tabTitle.close(); };

        let input = document.getElementById('tab-title');
        input.onkeydown = (x) => { if (x.code === 'Enter'){ window.tabTitle.save(); }};
        input.setSelectionRange(0, input.value.length);

        input.focus();
    };

    window.tabTitle.save = () => {
        document.title = document.getElementById('tab-title').value;
        window.tabTitle.close();
    };

    window.tabTitle.close = () => {
        document.body.removeChild(window.tabTitle.modal);
        window.tabTitle = null;
    };

    window.tabTitle.open();

})();