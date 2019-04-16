import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ErroCampoFormularioComponent } from './components/erro-campo-formulario/erro-campo-formulario.component';

@NgModule({
  declarations: [
    BreadcrumbComponent, 
    PageHeaderComponent, 
    ErroCampoFormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    PageHeaderComponent,
    ErroCampoFormularioComponent
  ]
})
export class SharedModule { }
