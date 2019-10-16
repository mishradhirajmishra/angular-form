import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveDynamicFormComponent } from './reactive-dynamic-form.component';

const routes: Routes = [{ path: '', component: ReactiveDynamicFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDynamicFormRoutingModule { }
