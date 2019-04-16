import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../shared';

@Component({
  selector: 'app-ultimo-cadastrado',
  templateUrl: './ultimo-cadastrado.component.html',
  styleUrls: ['./ultimo-cadastrado.component.css']
})
export class UltimoCadastradoComponent implements OnInit {

  tituloPagina: string = 'Último produto cadastrado'
  produto: Produto = new Produto()

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService
            .buscarPeloUltimoProdutoCadastrado()
            .subscribe(produto => this.produto = produto,
                       errors => alert('Não foi possível encontrar o último produto cadastrado'))
  }

  public get produtoCadastrado() {
    return this.produto
  }
}
