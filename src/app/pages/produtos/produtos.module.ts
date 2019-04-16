import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { UltimoCadastradoComponent } from './ultimo-cadastrado/ultimo-cadastrado.component';

@NgModule({
  declarations: [
    ProdutoListComponent, 
    ProdutoFormComponent, UltimoCadastradoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
