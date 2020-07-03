const { app , BrowserWindow }  = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width:600,
        height:800,
        webPreferences : {
            nodeIntegration : true
        }
    });

    win.loadFile('index.html');

});



