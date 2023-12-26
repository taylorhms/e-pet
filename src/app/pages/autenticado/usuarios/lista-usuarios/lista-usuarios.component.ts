import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PageParams } from 'src/app/models/page-params';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Users = [];

  page = 0;
  size = 10;
  totalElements = 0;
  filter = '';

  constructor(
    private userService: UserService,
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
    this.userService.findAllPage({ page: this.page, size: this.size, filter: this.filter }).subscribe({
      next: res => {
        this.usuarios = res.content;
        this.totalElements = res.totalElements;
      },
      error: res => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados.' });
      }
    });
  }
}
