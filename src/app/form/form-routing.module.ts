import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveformComponent } from './reactiveform';
import { FormComponent } from './form.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {path: '', redirectTo: 'reactiveform', pathMatch: 'full'},
      {path: 'reactiveform', component: ReactiveformComponent},
      {path: 'templateform', component: TemplateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormformRoutingModule { }
