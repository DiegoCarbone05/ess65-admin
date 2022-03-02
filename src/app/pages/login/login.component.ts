import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginControl!:FormGroup

  hide = true;
  constructor() { }

  currentUser = {
    'name':'',
    'password':''
  }

  getErrorMessage(controlName: string) {
    if (this.loginControl.controls[controlName].hasError('required')) {
      return 'Campo de Obligatorio';
    }
    return "";
  }

  ngOnInit(): void {
    this.loginControl = new FormGroup({
      // Formularios
      userName: new FormControl('', [Validators.required]),
      namePassword: new FormControl('', [Validators.required]),
    });
  }

  submitForm(){
    console.log(this.currentUser);
  }


}
