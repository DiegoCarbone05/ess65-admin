import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ElectronService } from 'src/app/services/electron.service';

@Component({
  selector: 'cne-banner-editor',
  templateUrl: './cne-banner-editor.component.html',
  styleUrls: ['./cne-banner-editor.component.scss']
})
export class CneBannerEditorComponent implements OnInit {

  // Variables //
  //---------- //

  btnBannerStatus:any

  //llamando inputs para cambiar su valor btnTextColor
  @ViewChild('titleSizeInput') titleSizeInput!:ElementRef
  @ViewChild('titleColor') titleColor!:ElementRef

  @ViewChild('btnColor') btnColor!:ElementRef
  @ViewChild('btnTextColor') btnTextColor!:ElementRef
  @ViewChild('urlBtnInput') urlBtnInputId!:ElementRef

  colorBtn:FormControl = new FormControl("color");
  colorTextBtn:FormControl = new FormControl("color");
  urlBtnInput:FormControl = new FormControl();

  colorInput:FormControl = new FormControl("color");
  titleSize:FormControl = new FormControl("number");




  // Datos del banner
  bannerData = {
    "text":"Los viajes creativos comienzan aquí",
    "contentAlign":"",
    "colorText":"#FFFFFF",
    "titleSize":"35",
    "bannerImg":"/assets/ilustrator/photo-1497864149936-d3163f0c0f4b.jpg",
    "btnStatus":true,
    "btnColor":"#4A6DA7",
    "colorTextBtn":"#FFFFFF",
    "urlBtn":"",
  }

  constructor(public electronSvc:ElectronService, public apiSvc:ApiService) { }

  ngOnInit(): void {
    this.takeInputValue();

  }

  ngAfterViewInit(){

    //Plasmando los datos del Json a los inputs
    this.titleSizeInput.nativeElement.value = this.bannerData.titleSize
    this.titleColor.nativeElement.value = this.bannerData.colorText
    this.btnColor.nativeElement.value = this.bannerData.btnColor
    this.btnTextColor.nativeElement.value = this.bannerData.colorTextBtn;


  }




  takeInputValue(){
    // Capturador de valor del input color text
    this.colorInput.valueChanges.subscribe((newValue)=>{
      this.bannerData.colorText = newValue
    })

    // Capturador de valor del input color text
    this.colorBtn.valueChanges.subscribe((newValue)=>{
      this.bannerData.btnColor = newValue
    })

    // Capturador de valor del input color text
    this.colorTextBtn.valueChanges.subscribe((newValue)=>{
      this.bannerData.colorTextBtn = newValue
    })

    // Capturador de valor del input number
    this.titleSize.valueChanges.subscribe((newValue)=>{
      this.bannerData.titleSize = newValue
    })

    this.urlBtnInput.valueChanges.subscribe((newValue)=>{
      this.bannerData.urlBtn = newValue
    })
  }

  setStatusBtn(e:boolean){
    this.bannerData.btnStatus = e

  }

  /**
   * Funcion encargada de cargar los ultimos datos guardados al editor del banner
   */
  loadLastChanges(){

  }

  // Funcion encargada de guardar los datos ya editados en el json del banner
  saveChanges(){
    this.apiSvc.saveChanges('bannerData', this.bannerData)
  }



}
