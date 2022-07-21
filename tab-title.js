javascript:(function(){

    window.tabTitle = {};

    window.tabTitle.open = () => {
        let currentTitle = document.title;
        let modal = document.createElement('div');
        modal.innerHTML = 
            '<div style="background: #f8f8f8;' +
            'border: 1px solid #999999;' +
            'position: fixed;' +
            'z-index: 1;' +
            'top: 20%; ' +
            'left: 50%; ' +
            'margin-right: -50%;' + 
            'transform: translate(-50%, -50%);' +
            'padding: 12px;' +
            'width: 40%;">' +
            '<h4>Tab Title</h4>' +
            '<input style="width: 75%" id="tab-title" type="text" value="' + currentTitle + '"></input>' +
            '<br><br>' +
            '<ul style="margin:0px; margin-bottom: 5px; padding:0px;">' +
            '    <li style="list-style: none; display: inline">' +
            '        <input type="button" value="Save" onclick="tabTitle.save()"/>' +
            '    </li>' +
            '    <li style="list-style: none; display: inline">' +
            '        <input type="button" value="Cancel" onclick="tabTitle.close()"/>' +
            '    </li>' +
            '</ul>' +
            '</div>';

        window.tabTitle.modal = modal;
        document.body.appendChild(modal);

        let input = document.getElementById('tab-title');
        input.setSelectionRange(input.value.length, input.value.length);

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