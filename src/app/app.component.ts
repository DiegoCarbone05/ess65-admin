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
  titleSeccionNav = "";
  @ViewChild('drawer') sideNav!: ElementRef;

  btnAside!: string;
  aside!: string;
  currentUser!: any;

  selectedSection = 60;

  sidebarBtns: any[] = [];

  constructor(
    public router: Router,
    public electronSvc: ElectronService,
    public authSvc: AuthService,
    public uiSvc: UiService
  ) {
    this.authSvc.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
    this.sidebarBtns = [
      {
        icon: 'view_quilt',
        text: 'Contenido',
        src: '/',
        mode: 'material-icons-outlined',
        bottomStatus: false
      },
      {
        icon: 'people',
        text: 'Usuarios',
        src: 'users',
        mode: 'material-icons',
        bottomStatus: false,
      },
      {
        icon: 'newspaper',
        text: 'Noticias',
        src: 'news',
        mode: 'material-icons-outlined',
        bottomStatus: false,
      },
      {
        icon: 'settings',
        text: 'Configuracion',
        src: 'config',
        mode: 'material-icons',
        bottomStatus: false,
      },
    ];
  }

  ngOnInit() {
    this.electronSvc.onReadyAngular();
    this.titleSeccionNav = this.uiSvc.titleSeccionNav;
    //this.openSidenav();
  }

  openSidenav() {
    this.uiSvc.touchSound();

    (<any>this.sideNav).toggle();
  }

  asideBtnConfig(sectionName: any, router: any) {
    this.selectedSection = sectionName * 48 + 60;
    this.uiSvc.touchSound();

    this.router.navigateByUrl(router);
    this.btnAside = '';

    this.btnAside = '';
    this.aside = '';
    this.asideStatus = false;
  }
  closeSession() {
    localStorage.removeItem('auth');
    location.reload();
  }
}
