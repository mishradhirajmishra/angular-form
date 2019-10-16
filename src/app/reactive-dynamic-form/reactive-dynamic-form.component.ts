import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PassCompare } from '../custom-Validators/password';
import { TimeCompare } from '../custom-Validators/timeCompair';
import { MainService } from "../shared/main.service";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-reactive-dynamic-form',
  templateUrl: './reactive-dynamic-form.component.html',
  styleUrls: ['./reactive-dynamic-form.component.css']
})
export class ReactiveDynamicFormComponent implements OnInit {

  maxDate: any = '2020-01-01';
  minDate: any = '2018-01-01';
  constructor(private router: Router, private fb: FormBuilder,private ms:MainService,private ts:ToastrService  ) {
    this.password.valueChanges.subscribe(
      x => this.cpassword.updateValueAndValidity()
    )
  }


  ngOnInit() {
    this.addMoreTime()
    // console.log(this.time2);
  
  }

  // ********************* form Validation *************
  // get time2() {
  //   return this.userProfile.get('time').controls[0].errors.invalidTime;
  // }
    get time2() {
    return this.userProfile.get('time');
  }
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

  // *********************************
  userProfile = this.fb.group({
    username: ['dfre', Validators.required],
    email: ['sf@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cpassword: ['', [Validators.required, PassCompare]],
    time: this.fb.array([])
  })

  get  getMoreTime(){
    return this.userProfile.get('time') as FormArray;
  }
  
  addMoreTime(){
    this.getMoreTime.push(this.fb.group({
      minTime: [''],
      maxTime: ['']
    },{validators:TimeCompare}));
  }
  delMoreTime(i){
    this.getMoreTime.removeAt(i);
  }
  updateProfile() {
    this.ms.dregister(this.userProfile.value).subscribe(
      data => { this.ts.success(data.message, 'Toastr fun!');},
      err => console.log(err)
    )
  
   }
}