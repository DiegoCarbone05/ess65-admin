import { Injectable } from '@angular/core';
import * as data from '../samples/data.json';
import * as users from '../samples/users.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  globalDataWeb:any = data;
  usersJson:any = users;

  // Funcion para guardar cambios en el Json Global
  saveChanges(name:string, data:any){
    if(this.globalDataWeb){
      (<any>this.globalDataWeb.webConfigPage)[name] = data;
      console.log("dfatosGFuardadios",this.globalDataWeb.webConfigPage);
    }
  }

}
