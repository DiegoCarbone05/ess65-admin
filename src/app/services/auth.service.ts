import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged = false
  usersList!:User[]
  currentUser = new BehaviorSubject<User | undefined>(undefined);
  lsVerificationAuth:any = undefined



  constructor(private apiSvc:ApiService, private userSvc:UserService) {

    this.userSvc.users$.subscribe((userListParam)=>{
      this.usersList = userListParam
      if (localStorage.length) {
        var ls = localStorage.getItem('auth')
        if(ls) this.localStorageAuth(ls)
      }
    })

  }

  getCurrentUserData(){
    var currentUser
    this.userSvc.users$.subscribe((userListParam)=>{
      var ls = localStorage.getItem('auth')
      currentUser = userListParam.find( user => user._id === ls);
    })

    return currentUser
  }

  localStorageAuth(id:string){
    const userFinded = this.usersList.find( user => user._id === id);

    if (userFinded?.webRol === "admin") {
      this.logged = true
      this.lsVerificationAuth = true
      this.currentUser.next(userFinded);
    }
    else{
      this.logged = false
      this.lsVerificationAuth = false
    }
  }

  login(userLogData:any, ls:boolean){

    const userFinded = this.usersList.find( user => user.name === userLogData.name );
    var status

    if (userFinded?.password == userLogData.password && userFinded?.webRol == "admin") {
      this.logged = true
      this.currentUser.next(userFinded)
      status = true
      if (ls) {
        localStorage.setItem('auth', userFinded._id || userFinded.name);
      }
    }
    else{
      status = false
    }

    return status

  }

}
