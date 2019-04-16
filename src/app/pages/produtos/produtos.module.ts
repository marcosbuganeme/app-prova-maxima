import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module'
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { UltimoCadastradoComponent } from './ultimo-cadastrado/ultimo-cadastrado.component';

@NgModule({
  declarations: [
    ProdutoListComponent, 
    ProdutoFormComponent, 
    UltimoCadastradoComponent
  ],
  imports: [
    SharedModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
