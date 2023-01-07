import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Output() onHide: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private http: HttpClient,
    public employeeService: EmployeeService
  ) {}
  _model: any = {};
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public onCanel() {
    this._model = {};
    this.onHide.emit(false);
  }
  onSubmit() {
    this.employeeService.addEmployee(this._model);
    this._model = {};
  }
}
