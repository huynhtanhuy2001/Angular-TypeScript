import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../crud.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  Users: any = [];
  constructor(public crudService: CrudService) {}
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.crudService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    });
  }
  remove(id: any) {
    this.crudService.delete(id).subscribe((res) => {
      this.fetchUsers();
    });
  }
}
