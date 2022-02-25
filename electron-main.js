const { app, BrowserWindow, ipcMain, shell, remote } = require('electron')
const { exec } = require("child_process");
const path = require('path');

var win;
function createWindow () {
  var splash = new BrowserWindow({
    width: 600,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });

  splash.loadFile('./splash.html');
  splash.center();
  splash.resizable = false;


  setTimeout(()=>{
    splash.close();
    win = new BrowserWindow({hidden:true ,frame:false,minWidth:720, webPreferences: {nodeIntegration: true,contextIsolation: false}})
    win.loadURL('http://localhost:4200/')
    win.maximize();
  }, 5000)

}

ipcMain.on('angularToElectron', (event, data) => {
  console.log("Atrapando un evento de angular; ",data);
  event.returnValue = "Hola Angular todo bien?";//Solo funciona si es sendSync
});

ipcMain.on('closeWindow', ()=>{
  win.close();
  console.log('closeWindow');
  // win.show();
})

ipcMain.on('sizeWindow', ()=>{

  if (win.isMaximized()) {
    win.unmaximize();
  }
  else{
    win.maximize();
  }
})


ipcMain.on('minimizeWindow', ()=>{
  win.minimize();
  // win.show();
  console.log('minimizeWindow');

})

app.whenReady().then(() => {

createWindow()
 app.on('activate', () => {
   if (BrowserWindow.getAllWindows().length === 0) {
     createWindow()
   }
 })
})

app.on('window-all-closed', () => {
 if (process.platform !== 'darwin') {
   app.quit()
 }
})
