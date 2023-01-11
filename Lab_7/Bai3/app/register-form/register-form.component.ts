import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  public _model: any = {};
  public _listUser: Array<any>;
  constructor(private _registerService: RegisterService) {
    this._listUser = this._registerService.getAllUsers();
  }

  ngOnInit(): void {}
  registerForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passWord: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  public get userName() {
    return this.registerForm.get('userName');
  }
  public get lastName() {
    return this.registerForm.get('lastName');
  }
  public get firstName() {
    return this.registerForm.get('firstName');
  }
  public get passWord() {
    return this.registerForm.get('passWord');
  }

  onSave(): void {
    this._model = {};
    console.log(this.registerForm.value);
  }
  onSubmit(): void {
    this._registerService.addUser(this._model);
    this.onSave();
  }
}
