import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PageParams } from 'src/app/models/page-params';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  
  produtos: Products = [];

  page = 0;
  size = 10;
  totalElements = 0;
  filter = '';

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.carregarLista();
  }

  onPage(event: PageParams){
    this.page = event.page!;
    this.size = event.size!;
    this.carregarLista();
  }

  carregarLista() {
    this.productService.findAllPage({ page: this.page, size: this.size, filter: this.filter }).subscribe({
      next: res => {
        this.produtos = res.content;
        this.totalElements = res.totalElements;
      },
      error: res => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados.' });
      }
    });
  }
}
