import { Component, Input } from '@angular/core';

interface BreadCrumb {

  text: string
  link?: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() itens: Array<BreadCrumb> = []

  constructor() { }

  ultimoElementoDaLista(item: BreadCrumb) {

    const index = this.itens.indexOf(item)
    return index + 1 == this.itens.length
  }
}
