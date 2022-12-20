import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _studentList: Array<any> = [];
  constructor() {
    this._studentList = [
      { name: 'Thanh Huynh', age: 24, city: 'TP.Ho Chi Minh', dob:'01-11-1996' },
    ];
  }
  getAllStudent(){
    return this._studentList;
  }
  addStudent(student:any) :void{
    this._studentList.push(student);
  }
  deleteStudent(student:any) :void{
    var lengthStudent = this._studentList.length;
    let reset = this._studentList.splice(1,lengthStudent);
  }
}
