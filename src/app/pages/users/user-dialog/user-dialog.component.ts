import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})


export class UserDialogComponent implements OnInit {

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  newUser = {
    'name':'',
    'password':'',
    'dni':'',
    'course':'',
    'turn':'',
    'webRol':''
  }

  getErrorMessage(controlName: string, text:string) {
    if (this.firstFormGroup.controls[controlName].hasError('required')) {
      return 'Campo de '+text+' Obligatorio';
    }
    return "";
  }

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Seccion de Forms
    this.firstFormGroup = new FormGroup({
      // Formularios
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
      userDni: new FormControl('', [Validators.required]),
    });
    this.secondFormGroup = new FormGroup({
      // Formularios
      course: new FormControl('', [Validators.required]),
      turn: new FormControl('', [Validators.required]),
      webRol: new FormControl('', [Validators.required]),
    });
  }

  // Cerrar Dialog
  onNoClick(): void {
    console.log(this.newUser);
    this.dialogRef.close();
  }


}
