import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PageParams } from 'src/app/models/page-params';
import { Services } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent {

  servicos: Services = [];

  page = 0;
  size = 10;
  totalElements = 0;
  filter = '';
  filtroTimeout?: number;

  constructor(
    private serviceService: ServiceService,
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
    this.serviceService.findAllPage({ page: this.page, size: this.size, filtro: this.filter }).subscribe({
      next: res => {
        this.servicos = res.content;
        this.totalElements = res.totalElements;
      },
      error: res => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados.' });
      }
    });
  }

  filtrar() {
    if (this.filtroTimeout)
      window.clearTimeout(this.filtroTimeout);

    this.filtroTimeout = window.setTimeout(() => this.carregarLista(), 700);
  }
}
