import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})


export class UserDialogComponent implements OnInit {

  currentStep = 0
  progressBarValue = 0

  newUser = {
    'name':'',
    'password':'',
    'dni':'',
    '':'',
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  submitButton(){
    this.currentStep = 1
    this.progressBarValue = 25
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
  }


}
