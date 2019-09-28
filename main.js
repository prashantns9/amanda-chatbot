//imports and declarations
const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow} = electron;
const webUrl = 'http://127.0.0.1:8080/index.html';
app.on('ready', function () {
    contactsWindow = new BrowserWindow({
        height: 640,
        width: 780,
        icon: 'src/assets/icons/icon-96x96.png'
    });
    contactsWindow.loadURL(webUrl);
});
