import { Component } from '@angular/core';
import { MenuItem } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-autenticado',
  templateUrl: './autenticado.component.html',
  styleUrls: ['./autenticado.component.css']
})
export class AutenticadoComponent {

  itens: MenuItem[] = [
    {
      label: 'Administração',
      url: '',
      subitens: [
        { label: 'Usuários', url: '/app/usuarios' }
      ]
    },
    {
      label: 'Loja',
      url: '',
      subitens: [
        { label: 'Produtos', url: '/app/produtos' },
        { label: 'Agendamentos', url: '/app/servicos' },
        { label: 'Pedidos', url: '/app/pedidos' }
      ]
    }
  ]
}
