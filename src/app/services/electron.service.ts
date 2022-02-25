import { Injectable } from '@angular/core';
const electron = (<any>window).require("electron");

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  constructor() { }

  winStatus:boolean = true

  emitirEventoAElectron(){
    //angular -> electron. Angular emite un evento que luego debe ser atrapado por electron
    electron.ipcRenderer.sendSync("angularToElectron",{message:"hola"})
  }

  closeWindow(){
    electron.ipcRenderer.send("closeWindow")
  }
  maximizeWindow(){
    this.winStatus = !this.winStatus
    electron.ipcRenderer.send("sizeWindow")
  }
  minimizeWindow(){
    electron.ipcRenderer.send("minimizeWindow")
  }

  onReadyAngular(){
    electron.ipcRenderer.send("isOnReadyAngular")
  }


}
