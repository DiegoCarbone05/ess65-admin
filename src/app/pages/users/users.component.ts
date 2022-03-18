import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {

  usersData:User[] = [];

  constructor( public apiSvc:ApiService,public dialog: MatDialog,public userSvc:UserService, public uiSvc:UiService){ }

  openUserDialog(method:boolean, user:any): void {
    this.dialog.open(UserDialogComponent,{
      data:{
        method,
        user,
        editMode:method
      }
    })
  }


  ngOnInit(): void {

    // Pidiendo usuarios de la db
    this.userSvc.users$.subscribe((listaNueva)=>{
      this.usersData = listaNueva;
      console.log(this.usersData);
    })
    this.uiSvc.titleSeccionNav = 'Usuarios'


    // this.openUserDialog(true, [])
  }

  deleteUser(userId:any){
    this.userSvc.removeUser(userId).subscribe((value)=>{
      this.userSvc.getUsers()
    })

  }


}
