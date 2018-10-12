import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { NameValidator } from './name-validator';

const forbiddenNames = ['111', '222'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  operatingSystems = ['macOS', 'Microsoft Windows'];
  userForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(
          null,
          [Validators.required, NameValidator(forbiddenNames)]
        ),
        'email': new FormControl(
          null,
          [Validators.required, Validators.email])
      }),
      'os': new FormControl('macOS'),
      'technology': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  addTechnology() {
    const control = new FormControl(null);
    this.technology.push(control);
  }

  get username() {
    return this.userForm.get('userData.username');
  }

  get email() {
    return this.userForm.get('userData.email');
  }

  get technology(): FormArray {
    return this.userForm.get('technology') as FormArray;
  }
}
