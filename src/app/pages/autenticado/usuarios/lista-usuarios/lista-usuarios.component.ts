import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PageParams } from 'src/app/models/page-params';
import { testData } from 'src/app/models/test-data';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  products = [
    { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: '24' },
    { code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: '61' },
    { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: '2' },
    { code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: '25' },
    { code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: '73' }
  ];

  usuarios: Users = testData.users;

  page = 0;
  size = 10;
  totalElements = 75;
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
  }

  carregarLista() {
    this.userService.findAllPage({ page: this.page, size: this.size }).subscribe({
      next: res => {
        this.usuarios = res.content;
      },
      error: res => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os dados.' });
      }
    })
  }
}
