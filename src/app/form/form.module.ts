import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveformComponent } from './reactiveform';
import { FormComponent } from './form.component';
import { FormformRoutingModule } from './form-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  imports: [
    CommonModule,
    FormformRoutingModule
  ],
  declarations: [ReactiveformComponent, FormComponent, TemplateComponent]
})
export class FormModule { }
