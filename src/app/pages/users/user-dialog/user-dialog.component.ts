import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})


export class UserDialogComponent implements OnInit {

  isLinear = true;
  formGroup!: FormGroup;
  editMode = false;

  user:User = {
    '_id':undefined,
    'name':'',
    'password':'',
    'dni':0,
    'course':0,
    'turn':'',
    'webRol':'',
    'schoolRol':''
  }

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userSvc:UserService,
    public apiSvc:ApiService
  ) {

    this.formGroup= new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      dni:new FormControl("32423",[Validators.required, Validators.min(10000000),  Validators.max(99999999)]),
      course: new FormControl('',),
      turn: new FormControl('',),
      webRol: new FormControl('',),
      schoolRol: new FormControl('',),

    });
   }

  ngOnInit(): void {

    if(this.data.editMode){

      this.user = this.data.user;
      this.editMode = this.data.editMode

      //this.content = this.data.method;
      this.formGroup.controls['name'].setValue(this.user.name);
      this.formGroup.controls['password'].setValue(this.user.password);
      this.formGroup.controls['dni'].setValue(this.user.dni);
      this.formGroup.controls['course'].setValue(this.user.course);
      this.formGroup.controls['turn'].setValue(this.user.turn);
      this.formGroup.controls['webRol'].setValue(this.user.webRol);
      this.formGroup.controls['schoolRol'].setValue(this.user.schoolRol);
    }
  }

  isFirstFormValid(){
    return this.formGroup.controls['name'].valid &&this.formGroup.controls['password'].valid && this.formGroup.controls['dni'].valid;
  }

  getErrorMessage(controlName: string, text:string) {
    if (this.formGroup.controls[controlName].hasError('required')) {
      return 'Campo de '+text+' Obligatorio';
    }
    else if(this.formGroup.controls[controlName].hasError('min') || this.formGroup.controls[controlName].hasError('max')){
      return 'Debe tener 8 caracteres';
    }
    return "Error";
  }

  // Cerrar Dialog
  onNoClick(){
  }

  sendNewUser(){
    this.user.name = this.formGroup.controls['name'].value;
    this.user.password = this.formGroup.controls['password'].value;
    this.user.dni = this.formGroup.controls['dni'].value;
    this.user.course = this.formGroup.controls['course'].value;
    this.user.turn = this.formGroup.controls['turn'].value;
    this.user.webRol = this.formGroup.controls['webRol'].value;
    this.user.schoolRol = this.formGroup.controls['schoolRol'].value;


    if (this.editMode) {
      this.userSvc.setUser(this.user).subscribe(res =>{
        this.userSvc.getUsers()
        this.dialogRef.close();
      })
    }
    else{
      // console.log(this.user);
      // return;

      this.userSvc.addUser(this.user).subscribe(res =>{
        this.userSvc.getUsers()
        this.dialogRef.close();
      })
    }
  }


}
