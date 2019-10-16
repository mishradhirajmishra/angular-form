import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateMinMax } from '../custom-Validators/min-max-date';
import { ValidateUrl } from '../custom-Validators/url';
import { PassCompare } from '../custom-Validators/password';
import { HobbyValidation } from '../custom-Validators/hobby';
import { TimeCompare } from '../custom-Validators/timeCompair';
import {MainService  } from "../shared/main.service";
@Component({
  selector: 'app-reactive-builder-form',
  templateUrl: './reactive-builder-form.component.html',
  styleUrls: ['./reactive-builder-form.component.css']
})
export class ReactiveBuilderFormComponent implements OnInit {
  maxDate: any = '2020-01-01';
  minDate: any = '2018-01-01';
  constructor(private router: Router, private fb: FormBuilder,private ms:MainService ) {
    this.password.valueChanges.subscribe(
      x => this.cpassword.updateValueAndValidity()
    )
  }


  ngOnInit() {

  }

  // ********************* form Validation *************

  get time() {
    return this.userProfile.get('time');
  }

  get username() {
    return this.userProfile.get('username');
  }
  get email() {
    return this.userProfile.get('email');
  }
  get password() {
    return this.userProfile.get('password');
  }
  get cpassword() {
    return this.userProfile.get('cpassword');
  }
  get category() {
    return this.userProfile.get('category');
  }
  get gender() {
    return this.userProfile.get('gender');
  }
  get range() {
    return this.userProfile.get('range');
  }
  get dob() {
    return this.userProfile.get('dob');
  }
  get url() {
    return this.userProfile.get('url');
  }
  get color() {
    return this.userProfile.get('color');
  }
  get about() {
    return this.userProfile.get('about');
  }
  get hobby() {
    return this.userProfile.get('hobby');
  }


  // *********************************
  userProfile = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cpassword: ['', [Validators.required, PassCompare]],
    category: ['', Validators.required],
    gender: ['', Validators.required],
    range: ['', Validators.required],
    dob: ['', [Validators.required, ValidateMinMax]],
    url: ['', [Validators.required, ValidateUrl]],
    color: ['', Validators.required],
    about: ['', Validators.required],
    hobby: this.fb.group({
      reading_book: [false],
      watching_moove: [false],
      swimming: [false]
    },{validators:HobbyValidation}),
    time: this.fb.group({
      minTime: [''],
      maxTime: ['']
    },{validators:TimeCompare})
  })
  updateProfile() {
   this.ms.register(this.userProfile.value).subscribe(
     data => console.log(data),
     err => console.log(err)
   )
  
  }
}
