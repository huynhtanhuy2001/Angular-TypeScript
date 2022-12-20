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
    console.log(this._studentService);
  }
  onReset(): void {
    this._model = {};
  }
  delete(i: any) {
    this._studentService.delte(i);
  }
  reset(): void {
    this._studentService.reset(this._model);
    this.onReset();
  }
}
