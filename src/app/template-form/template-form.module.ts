import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';

import { UrlValidateDirective } from '../shared/url-validate.directive';

@NgModule({
  declarations: [
    TemplateFormComponent, 
    UrlValidateDirective
  ],
  imports: [
    CommonModule,
    FormsModule
    ,
   
    TemplateFormRoutingModule
  ]
})
export class TemplateFormModule { }
