import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public _model: any = {};
  public _listStudent: Array<any>;
  constructor(private _studentService: StudentService) {
    this._listStudent = this._studentService.getAllStudent();
  }
  ngOnInit(): void {}
  onSubmit(): void {
    this._studentService.addStudent(this._model);
    this.onReset();
  }
  onReset(): void {
    this._model= {};
  }
  reset(): void {
    this._studentService.deleteStudent(this._model);
    this.onReset();
  }}
