import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ess65Admin';
  asideStatus = false;

  btnAside!:string
  aside!:string

  selectedSection = 60;
  public sidebarBtns = [
    {"icon":"mdl2-globe", "text":"Inicio", 'src':'/', 'bottomStatus':false},
    {"icon":"mdl2-people", "text":"Usuarios", 'src':'users', 'bottomStatus':false},
    {"icon":"mdl2-preview-link", "text":"Noticias", 'src':'news', 'bottomStatus':false},
    {"icon":"mdl2-settings", "text":"Configuracion", 'src':'config', 'bottomStatus':true},

  ]

  constructor(public router:Router, public electronSvc:ElectronService){}

  ngOnInit(){
    this.electronSvc.onReadyAngular()
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

  openAside(){
    let aside = document.getElementById('aside')
    this.asideStatus = !this.asideStatus

    if (this.asideStatus) {
      this.btnAside = 'width: 298px;'
      this.aside = 'width: 250px;'
    }else{
      this.btnAside = ''
      this.aside = ''
    }
    console.log(this.asideStatus);

  }

  asideBtnConfig(sectionName:any, router:any){
    this.selectedSection = (sectionName*48)+60;

    this.router.navigateByUrl(router)
    this.btnAside = ''

    this.btnAside = ''
    this.aside = ''
    this.asideStatus = false
  }


}
