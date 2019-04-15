import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import { Produto } from '../shared/produto.model'
import { ProdutoService } from '../shared/produto.service'

import { switchMap } from 'rxjs/operators'
import toastr from 'toastr'

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit, AfterContentChecked {

  rotaCorrente: string
  tituloPagina: string
  produtoFormulario: FormGroup
  errosServidor: string[] = null
  produto: Produto = new Produto()
  desabilitarBotaoSalvar: boolean = false

  constructor(private produtoService: ProdutoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setRotaCorrente()
    this.construirValidadoresProduto()
    this.carregarProduto()
  }

  ngAfterContentChecked() {
    
    this.setTituloPagina()
  }

  private setRotaCorrente(): void {

    if (this.activatedRoute.snapshot.url[0].path == 'new') 
      this.rotaCorrente = 'new'
    else 
      this.rotaCorrente = 'edit'
  }

  private construirValidadoresProduto(): void {

    this.produtoFormulario = this.formBuilder.group({
      id: [null],
      descricao: [null, [Validators.required, Validators.minLength(2)]],
      preco: [null]
    })
  }

  private carregarProduto(): void {

    if (this.rotaCorrente == 'edit') {

      this.activatedRoute
              .paramMap
              .pipe(switchMap(params => this.produtoService.buscarPorId(+params.get('id'))))
              .subscribe((produto) => {
                this.produto = produto
                this.produtoFormulario.patchValue(produto)
              }),
              (error) => alert('Ocorreu um erro no servidor, tente mais tarde!')
    }
  }

  private setTituloPagina(): void {

    if (this.rotaCorrente == 'new') {

      this.tituloPagina = 'Cadastro de novo produto'

    } else {

      const descricaoProduto = this.produto.descricao || ''
      this.tituloPagina = 'Editando de produto: ' + descricaoProduto
    }
  }

  private criarProduto(): void {

    const produto: Produto = Object.assign(new Produto(), this.produtoFormulario.value)
    this.produtoService
            .salvar(produto)
            .subscribe(produto => this.acoesSucesso(produto),
                       error => this.acoesErro(error))
  }

  prvate alterarProduto(): void {

  }

  private acoesSucesso(produto: Produto): void {
    toastr.success('Solicitação processada com sucesso')

    this.router
          .navigateByUrl('produtos', { skipLocationChange: true})
          .then(() => this.router.navigate(['produtos', produto.id, 'edit']))
  }

  priate acoesErro(): void {
    toastr.error('Ocorreu um erro ao processar a sua solicitação')

    this.desabilitarBotaoSalvar = false

    if (error.status === 422)
      this.errosServidor = JSON.parse(error._body).errors
    else
      this.errosServidor = ['Falha na comunicação com o servidor. Por favor, tente mais tarde']
  }
}