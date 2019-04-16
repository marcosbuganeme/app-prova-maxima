import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { map, catchError, flatMap } from 'rxjs/operators'
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiPath: string = 'http://localhost:8181/api/produtos'

  constructor(private http: HttpClient) { }

  buscarPeloUltimoProdutoCadastrado(): Observable<Produto> {
    const url = `${this.apiPath}/ultimo/cadastrado`

    return this.http
                .get(url)
                .pipe(map(this.converterJsonParaProduto),
                      catchError(this.manipulaErro))
  }

  buscarTodosProdutos(): Observable<Produto[]> {

    return this.http
                .get(this.apiPath)
                .pipe(map(this.converterJsonParaProdutos),
                      catchError(this.manipulaErro))
  }

  buscarPorId(id: number): Observable<Produto> {

    const url = `${this.apiPath}/${id}`
    return this.http
                  .get(url)
                  .pipe(map(this.converterJsonParaProduto),
                        catchError(this.manipulaErro))
  }

  salvar(produto: Produto): Observable<Produto> {

    return this.http
                  .post(this.apiPath, produto)
                  .pipe(map(this.converterJsonParaProduto),
                        catchError(this.manipulaErro))
  }

  editar(produto: Produto): Observable<Produto> {

    const url = `${this.apiPath}/${produto.id}`
    return this.http
                  .put(url, produto)
                  .pipe(map(this.converterJsonParaProduto),
                        catchError(this.manipulaErro))
  }

  private converterJsonParaProdutos(json: any[]): Produto[] {

    const produtos: Produto[] = []
    json.forEach(produto => produtos.push(Object.assign(new Produto(), produto)));
    return produtos
  }

  private converterJsonParaProduto(json: any): Produto {

    return Object.assign(new Produto(), json)
  }

  private manipulaErro(error: any): Observable<any> {

    console.log('Erro na requisição -> ', error)
    return throwError(error)
  }
}