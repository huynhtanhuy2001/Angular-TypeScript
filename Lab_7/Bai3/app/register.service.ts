import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public userList: Array<any> = [];
  constructor() {
    this.userList = [
      // {  userName: 't', lastName: 't', firstName: 't', passWord: '1234' },
    ];
  }
  getAllUsers() {
    return this.userList;
  }
  addUser(user: any): void {
    this.userList.push(user);
  }
}
