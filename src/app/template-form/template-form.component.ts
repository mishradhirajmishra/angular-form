import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MainService } from "../shared/main.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
  
})
export class TemplateFormComponent implements OnInit {
  maxDate:any= '2020-01-01';
  minDate:any= '2018-01-01';

  constructor(private ms:MainService , private ts:ToastrService) { }
  invalidPass:Boolean = false
  ngOnInit() {
    console.log(this.maxDate);
  }


  chkPass(password,cpassword){
  if(password===cpassword){
    this.invalidPass=false;
  }else{
    this.invalidPass=true;
  }
  }
  sendData(data:NgForm) {
    this.ms.register(data.value).subscribe(
      data => { this.ts.success(data.message, 'Toastr fun!');},
      err => console.log(err)
    )  
   }
}
