import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  uploadedFiles!: Array<File>;

  constructor(public uploadSvc: UploadService) {}

  ngOnInit(): void {}

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
}
