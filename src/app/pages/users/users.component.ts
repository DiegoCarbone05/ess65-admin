import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  animal!: string;
  name!: string;

  usersData:any

  constructor(
    public apiSvc:ApiService,
    public dialog: MatDialog,

    ) {
    this.usersData = this.apiSvc.usersJson.users
    console.log(this.usersData);
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent,{
      panelClass: 'modal-container',
      data: {
        title: 'Error recuperando contraseña',
        body: `Hubo un error al recuperar tu contraseña, por favor intentá nuevamente.`,
        options: ['Aceptar'],
      },
    })
  }


  ngOnInit(): void {
  }



}
