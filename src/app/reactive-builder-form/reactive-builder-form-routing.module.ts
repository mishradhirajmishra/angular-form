import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveBuilderFormComponent } from './reactive-builder-form.component';

const routes: Routes = [{ path: '', component: ReactiveBuilderFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveBuilderFormRoutingModule { }
