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

  usersData:any

  constructor( public apiSvc:ApiService,public dialog: MatDialog,){
    this.usersData = this.apiSvc.usersJson.users
  }

  openDialog(): void {
    this.dialog.open(UserDialogComponent)
  }


  ngOnInit(): void {
  }



}
