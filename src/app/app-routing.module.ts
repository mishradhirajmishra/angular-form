import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  { path: 't-form', loadChildren: () => import('./template-form/template-form.module').then(m => m.TemplateFormModule) },

  { path: 'r-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },

  { path: 'r-b-form', loadChildren: () => import('./reactive-builder-form/reactive-builder-form.module').then(m => m.ReactiveBuilderFormModule) },
  { path: 'r-d-form', loadChildren: () => import('./reactive-dynamic-form/reactive-dynamic-form.module').then(m => m.ReactiveDynamicFormModule) }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
