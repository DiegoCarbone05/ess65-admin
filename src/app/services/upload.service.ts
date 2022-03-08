import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  uploadFile(formData:any) {
    let urlAPI = 'http://localhost:3000/api/staticContent/bannerImage/';
    return this.http.post(urlAPI, formData);
  }

}
