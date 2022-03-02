import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'cne-alert-editor',
  templateUrl: './cne-alert-editor.component.html',
  styleUrls: ['./cne-alert-editor.component.scss']
})
export class CneAlertEditorComponent implements OnInit {

  @ViewChild('alertText') alertText!:ElementRef

  constructor(public apiSvc:ApiService) {

  }

  alertData = {
    'alertStatus':true,
    'alertColor':'warn',
    'alertTextAling':'left',
    'alertPrefix':'Noticia',
    'alertText':'AlertComponent',
    'alertTextAutomaticColor':'#000',
  }

  ngOnInit(): void {
    this.changeAlertColor
  }

  ngAfterViewInit() {
    this.changeAlertColor(this.alertData.alertColor)
    this.alertData = this.apiSvc.globalDataWeb.webConfigPage.alertData
  }

  //Output Toggle
  setStatusBtn(e:boolean){
    this.alertData.alertStatus = e
  }

  changeAlertColor(color:string){
    if (color == 'warn') {this.alertData.alertTextAutomaticColor = '#000';}
    else{this.alertData.alertTextAutomaticColor = '#FFF';}
    this.alertData.alertColor = color
  }

  changeAlingText(aling:string){
    this.alertData.alertTextAling = aling
  }

  changeAlertPrefix(option:string){
    this.alertData.alertPrefix = option
    if (option == 'Noticia') {this.alertData.alertColor = 'defaultColor'; this.alertData.alertTextAutomaticColor = '#FFF';}
    if (option == 'Aviso') {this.alertData.alertColor = 'warn'; this.alertData.alertTextAutomaticColor = '#000';}
    if (option == 'Anuncio') {this.alertData.alertColor = 'info'; this.alertData.alertTextAutomaticColor = '#FFF';}
    if (option == 'Informacion') {this.alertData.alertColor = 'info'; this.alertData.alertTextAutomaticColor = '#FFF';}
  }

  saveChanges(){
    //Guarda el texto del alert en "AlertData"
    this.alertData.alertText = this.alertText.nativeElement?.innerHTML
    this.apiSvc.saveChanges('alertData', this.alertData)
  }

}
