import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { ElectronService } from './services/electron.service';
import { UiService } from './services/ui.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ess65Admin';
  asideStatus = false;

  @ViewChild("drawer") sideNav!:ElementRef

  btnAside!: string;
  aside!: string;
  currentUser!:any

  selectedSection = 60;

  sidebarBtns:any[] = [];

  constructor(
    public router: Router,
    public electronSvc: ElectronService,
    public authSvc: AuthService,
    public uiSvc:UiService
  ) {
    this.authSvc.currentUser.subscribe((user) => {
      this.currentUser = user
    });
    this.sidebarBtns = [
      { icon: 'home', text: 'Inicio', src: '/', bottomStatus: false },
      {
        icon: 'people',
        text: 'Usuarios',
        src: 'users',
        bottomStatus: false,
      },
      {
        icon: 'newspaper',
        text: 'Noticias',
        src: 'news',
        bottomStatus: false,
      },
      {
        icon: 'settings',
        text: 'Configuracion',
        src: 'config',
        bottomStatus: false,
      },
    ];
  }



  ngOnInit() {
    this.electronSvc.onReadyAngular();
    // this.sideNav.toggle()
  }

  openSidenav(){
    (<any>this.sideNav).toggle();
  }

  openAside(){
    this.uiSvc.sidenavStatus = !this.uiSvc.sidenavStatus
  }

  asideBtnConfig(sectionName: any, router: any) {
    this.selectedSection = sectionName * 48 + 60;

    this.router.navigateByUrl(router);
    this.btnAside = '';

    this.btnAside = '';
    this.aside = '';
    this.asideStatus = false;
  }
}
