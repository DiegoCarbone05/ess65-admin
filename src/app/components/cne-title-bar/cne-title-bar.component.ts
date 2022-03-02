import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/services/electron.service';

@Component({
  selector: 'cne-title-bar',
  templateUrl: './cne-title-bar.component.html',
  styleUrls: ['./cne-title-bar.component.scss']
})
export class CneTitleBarComponent implements OnInit {

  constructor(public electronSvc:ElectronService) { }

  ngOnInit(): void {
  }

  titleBarWindow(btnName:string){
    // closeWindow()
    if (btnName == 'close') {
      this.electronSvc.closeWindow()
    }
    if (btnName == 'size') {
      this.electronSvc.maximizeWindow()
    }
    if (btnName == 'minimize') {
      this.electronSvc.minimizeWindow()
    }
  }


}
