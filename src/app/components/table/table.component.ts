import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TableBodyDirective } from 'src/app/directives/table-body.directive';
import { TableHeaderDirective } from 'src/app/directives/table-header.directive';
import { PageParams } from 'src/app/models/page-params';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @ContentChild(TableHeaderDirective) tableHeader!: TableHeaderDirective;
  @ContentChild(TableBodyDirective) tableBody!: TableBodyDirective;
  @Input() itens: object[] = [];

  @Input() page: number = 0;
  @Input() size: number = 0;
  @Input() totalElements: number = 0;

  @Output() onPage = new EventEmitter<PageParams>();
  
  get columns(): string[] {
    return this.itens.length > 0 ? Object.keys(this.itens[0]) : [];
  }

  get numPages(): number[] {
    // maxToLeft e maxToRight tenta manter 5 números na paginação
    // se estiver nas duas primeiras páginas, adiciona mais itens ao fim (até 4)
    // se estiver nas duas últimas páginas, adiciona mais itens ao início (até 4)
    // caso contrário, apenas 2 itens à esquerda e à direita
    const maxToLeft = (this.page > this.lastPage - 2) ? 4 - (this.lastPage - this.page) : 2;
    const maxToRight = (this.page < 2) ? 4 - this.page : 2;
    const first = Math.max(this.page - maxToLeft, 0);
    const last  = Math.min(this.page + maxToRight, this.lastPage);
    const arr: number[] = [];

    for (let i = first; i <= last; i++) {
      arr.push(i);
    }

    return arr;
  }

  get lastPage(): number {
    return Math.ceil(this.totalElements / this.size) - 1;
  }

  isFirstPage(): boolean {
    return this.page <= 0;
  }

  isLastPage(): boolean {
    return this.page >= this.lastPage;
  }

  gotoPage(page: number) {
    if (page == this.page)
      return;

    this.onPage.emit({
      page: page,
      size: this.size
    });
  }

}
