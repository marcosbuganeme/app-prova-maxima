import { Component, OnInit } from '@angular/core';

import { Produto, ProdutoService } from '../shared';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.produtoService
          .buscarTodosProdutos()
          .subscribe(produtos => this.produtos = produtos,
                     errors => alert('Erro ao carregar a lista'))
  }
}
