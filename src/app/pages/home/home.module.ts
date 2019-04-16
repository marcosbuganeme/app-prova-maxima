import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module'

import { HomeRoutingModule } from './home-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
