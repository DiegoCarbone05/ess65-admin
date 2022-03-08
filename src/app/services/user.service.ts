import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users$ = new BehaviorSubject<User[]>([]);

  constructor(private apiSvc:ApiService) {
    this.getUsers();
  }

  getUsers() {
    const obs = this.apiSvc.getUsers();
    obs.subscribe((value) => {
      this.users$.next(value);
    });
    return obs;
  }

  addUser(user: User) {
    const obs = this.apiSvc.addUser(user);
    this.getUsers()
    return obs;
  }

  setUser(user: any) {
    return this.apiSvc.setUser(user);
  }

  removeUser(_id: User) {
    return this.apiSvc.removeUser(_id);
  }
}
