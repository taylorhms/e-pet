import { Component } from '@angular/core';
import { MenuItem } from 'src/app/components/menu/menu.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autenticado',
  templateUrl: './autenticado.component.html',
  styleUrls: ['./autenticado.component.css']
})
export class AutenticadoComponent {

  loginUsuario = localStorage.getItem(environment.userStorageKey) ?? '';

  itens: MenuItem[] = [
    {
      label: 'Administração',
      url: '',
      subitens: [
        { label: 'Usuários', url: '/app/usuarios', icon: 'pi pi-user' }
      ]
    },
    {
      label: 'Loja',
      url: '',
      subitens: [
        { label: 'Produtos', url: '/app/produtos', icon: 'pi pi-tags' },
        { label: 'Agendamentos', url: '/app/servicos', icon: 'pi pi-calendar' },
        //{ label: 'Pedidos', url: '/app/pedidos' }
      ]
    }
  ];

  logout() {
    localStorage.clear();
    location.reload();
  }
}
