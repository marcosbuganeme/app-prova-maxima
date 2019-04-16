import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { UltimoCadastradoComponent } from './ultimo-cadastrado/ultimo-cadastrado.component';

const routes: Routes = [
  { path: '', component: ProdutoListComponent },
  { path: 'new', component: ProdutoFormComponent },
  { path: ':id/edit', component: ProdutoFormComponent },
  { path: ':id/edit', component: ProdutoFormComponent },
  { path: 'ultimo/cadastrado', component: UltimoCadastradoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
