import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveBuilderFormRoutingModule } from './reactive-builder-form-routing.module';
import { ReactiveBuilderFormComponent } from './reactive-builder-form.component';


@NgModule({
  declarations: [ReactiveBuilderFormComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    ReactiveBuilderFormRoutingModule
  ],
  providers:[]
})
export class ReactiveBuilderFormModule { }
