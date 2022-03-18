import { News } from './../models/news';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import * as data from '../samples/data.json';
import * as users from '../samples/users.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  globalDataWeb: any = data;
  usersJson: any = users;
  urlApi = environment.baseApi;

  //ENPOINTS NEWS
  getNewsData(){
    return this.http.get<any[]>(this.urlApi+"/news").pipe(share());
  }
  setNewsData(news:News){
    return this.http.post(this.urlApi+"/news", news);
  }
  deleteNews(_id:any){
    return this.http.delete(this.urlApi+"/news" + `/${_id}`);
  }

  //ENPOINTS STATIC CONTENT
  getStaticConfig(){
    return this.http.get<any[]>(this.urlApi+"/staticContent")
  }

  setStaticConfig(staticConfig: any){
    console.log('llego a setStaticConfig from api', staticConfig);
    return this.http.put(this.urlApi+"/staticContent" + `/${staticConfig._id}`, staticConfig)
  }


  //ENPOINTS USUARIO
  getUsers() {
    return this.http.get<User[]>(this.urlApi+"/users");
  }

  addUser(user: User) {
    console.log(user);
    return this.http.post(this.urlApi+"/users", user);

  }

  setUser(user: User) {
    return this.http.put(this.urlApi+"/users" + `/${user._id}`, user);
  }

  removeUser(_id: User) {
    return this.http.delete(this.urlApi+"/users" + `/${_id}`);
  }
}
