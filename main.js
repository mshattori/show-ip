const { app, BrowserWindow } = require('electron');

let win;

function createWindow (argument) {
	win = new BrowserWindow({ width: 300, height: 100 });
	win.loadFile('index.html');
	win.on('closed', () => {
		console.log('window closed');
		win = null;
	});
	// win.webContents.openDevTools();
}

app.on('active', () => {
	if (!win) {
		createWindow();
	}
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
