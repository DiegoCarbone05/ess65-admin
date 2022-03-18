import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginControl!:FormGroup
  hide = true;
  activeLocalStorage!:boolean
  statusLogin!:any
  lsStatus = localStorage.length

  constructor(public authSvc:AuthService) {

  }

  currentUser = {
    'name':'',
    'password':''
  }
  valueChange(e:any){
    this.activeLocalStorage = e.checked
  }

  ngOnInit(): void {
    this.loginControl = new FormGroup({
      // Formularios
      userName: new FormControl('', [Validators.required]),
      namePassword: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage(controlName: string) {
    if (this.loginControl.controls[controlName].hasError('required')) {
      return 'Campo de Obligatorio';
    }
    return "";
  }


  submitForm(){
    this.statusLogin = this.authSvc.login(this.currentUser, this.activeLocalStorage)

    if(!this.statusLogin){
      setTimeout(()=>{

        this.statusLogin = undefined

      },4000)
    }
  }


}
