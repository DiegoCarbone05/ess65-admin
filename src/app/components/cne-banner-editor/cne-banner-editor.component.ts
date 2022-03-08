import { Color, NgxMatColorPickerInput } from '@angular-material-components/color-picker';
import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from 'src/app/services/api.service';
import { ElectronService } from 'src/app/services/electron.service';
import { StaticContentService } from 'src/app/services/static-content.service';
import { UploadService } from 'src/app/services/upload.service';
import { __values } from 'tslib';

@Component({
  selector: 'cne-banner-editor',
  templateUrl: './cne-banner-editor.component.html',
  styleUrls: ['./cne-banner-editor.component.scss'],
})
export class CneBannerEditorComponent implements OnInit {
  // Variables //
  //---------- //

  public disabled = false;
  public color: ThemePalette = "accent";
  public touchUi = true;
  public colorControl = new FormControl();
  colorCtr: AbstractControl = new FormControl(null, [Validators.required]);

  btnBannerStatus: any;

  //llamando inputs para cambiar su valor
  @ViewChild('titleColor') titleColor!: ElementRef;

  @ViewChild(NgxMatColorPickerInput) pickerInput!: NgxMatColorPickerInput;

  colorBtn: FormControl = new FormControl();
  colorTextBtn: FormControl = new FormControl();
  urlBtnInput: FormControl = new FormControl();

  colorInput: FormControl = new FormControl();
  titleSize: FormControl = new FormControl();

  // Datos del banner
  bannerData = {
    name: 'bannerConfig',
    configs: {
      title: 'Title',
      description: 'Description',
      contentAlign: '',
      colorText: '#FFFFFF',
      titleSize: '35',
      bannerImg: 'http://localhost:3000/api/staticContent/bannerImage/',
      btnStatus: true,
      btnColor: '#4A6DA7',
      colorTextBtn: '#FFFFFF',
      urlBtn: '',
    },
  };

  uploadedFiles!: Array<File>;

  constructor(
    public electronSvc: ElectronService,
    public apiSvc: ApiService,
    public staticContentSvc: StaticContentService,
    public uploadSvc: UploadService
  ) {
    this.colorControl.valueChanges.subscribe((value:any)=>{
      if(value?.hex) this.bannerData.configs.colorText = "#"+ value.hex;
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadLastChanges();

    //Plasmando los datos del Json a los inputs
    const temp = this.hexToRgb('#00ff00');
    if(temp)
    this.pickerInput.value = new Color(temp.r, temp.g, temp.b);
  }

  hexToRgb(hex:string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  subirArchivos() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i]);
    }
    //llamar al servicio
    this.uploadSvc.uploadFile(formData).subscribe((res) => {
      console.log('response received is ', res);
    });
  }

  fileChange(element: any) {
    this.uploadedFiles = element.target.files[0];
    console.log(this.uploadedFiles);
  }

  /**
   * Funcion encargada de cargar los ultimos datos guardados al editor del banner
   */

  loadLastChanges() {
    this.staticContentSvc.getStaticConfig().subscribe((configList) => {
      const bannerConfig = configList.find(
        (configItem) => configItem.name === 'bannerConfig'
      );
      if (bannerConfig) {
        this.bannerData = bannerConfig;
      }
    });
  }

  //Plasmando los datos del json en el editor


  setStatusBtn(e: boolean) {
    this.bannerData.configs.btnStatus = e;
  }

  // Funcion encargada de guardar los datos ya editados en el json del banner
  saveChanges() {

    this.staticContentSvc
      .setStaticConfig(this.bannerData)
      .subscribe((res) => {});
  }
}
