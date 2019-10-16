import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDynamicFormRoutingModule } from './reactive-dynamic-form-routing.module';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactiveDynamicFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveDynamicFormRoutingModule
  ]
})
export class ReactiveDynamicFormModule { }
