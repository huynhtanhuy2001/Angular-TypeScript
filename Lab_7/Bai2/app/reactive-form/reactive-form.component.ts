import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onSave() {
    console.log(this.rectiveForm.value);
  }

  // register form

  rectiveForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    City: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    State: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    Zip: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ]),
    checkbox: new FormControl('', [Validators.required]),
  });
  // get properties

  public get userName() {
    return this.rectiveForm.get('userName');
  }
  public get lastName() {
    return this.rectiveForm.get('lastName');
  }
  public get firstName() {
    return this.rectiveForm.get('firstName');
  }
  public get City() {
    return this.rectiveForm.get('City');
  }
  public get State() {
    return this.rectiveForm.get('State');
  }
  public get Zip() {
    return this.rectiveForm.get('Zip');
  }
  public get checkbox() {
    return this.rectiveForm.get('checkbox');
  }
}
