import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaticContentService } from 'src/app/services/static-content.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'cne-alert-editor',
  templateUrl: './cne-alert-editor.component.html',
  styleUrls: ['./cne-alert-editor.component.scss'],
})
export class CneAlertEditorComponent implements OnInit {

  @ViewChild('alertText') alertText!: ElementRef;
  alertData = {
    name: 'alertConfig',
    configs: {
      alertStatus: true,
      alertColor: 'warn',
      alertTextAling: 'left',
      alertPrefix: 'Prefix',
      alertText: 'AlertComponent',
      alertTextAutomaticColor: '#000',
    },
  };

  constructor(
    public apiSvc: ApiService,
    public staticContentSvc: StaticContentService
  ) {}



  ngOnInit(): void {
    //this.changeAlertColor
  }

  ngAfterViewInit() {
    this.changeAlertColor(this.alertData.configs.alertColor);
    this.getConfig();
  }

  // Guarda la funcion que pide la data en otra funcion para luego pedirla en el "ngAfterVewInit"
  getConfig() {
    this.staticContentSvc.getStaticConfig().subscribe((configList) => {
      const alertConfig = configList.find(
        (configItem) => configItem.name === 'alertConfig'
      );
      if (alertConfig) {
        this.alertData = alertConfig;
      }
    });
  }

  //Output Toggle
  setStatusBtn(e: boolean) {
    this.alertData.configs.alertStatus = e;
  }

  // Funcion encargada de cambiar el color del alert
  changeAlertColor(color: string) {
    if (color == 'warn') {
      this.alertData.configs.alertTextAutomaticColor = '#000';
    } else {
      this.alertData.configs.alertTextAutomaticColor = '#FFF';
    }
    this.alertData.configs.alertColor = color;
  }

  // Funcion encargada de cambiar la jsutificacion de texto
  changeAlingText(aling: string) {
    this.alertData.configs.alertTextAling = aling;
  }

  // Funcion encargada de cambiar los prefijos
  changeAlertPrefix(option: string) {
    this.alertData.configs.alertPrefix = option;
    if (option == 'Noticia') {
      this.alertData.configs.alertColor = 'defaultColor';
      this.alertData.configs.alertTextAutomaticColor = '#FFF';
    }
    if (option == 'Aviso') {
      this.alertData.configs.alertColor = 'warn';
      this.alertData.configs.alertTextAutomaticColor = '#000';
    }
    if (option == 'Anuncio') {
      this.alertData.configs.alertColor = 'info';
      this.alertData.configs.alertTextAutomaticColor = '#FFF';
    }
    if (option == 'Informacion') {
      this.alertData.configs.alertColor = 'info';
      this.alertData.configs.alertTextAutomaticColor = '#FFF';
    }
  }

  // Funcion encargada de cargar los cambios
  saveChanges() {
    //Guarda el texto del alert en "AlertData"
    this.alertData.configs.alertText = this.alertText.nativeElement?.innerHTML;
    console.log(this.alertData);

    this.staticContentSvc
      .setStaticConfig(this.alertData)
      .subscribe((res) => {});
  }
}
