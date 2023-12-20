import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  products = [
    { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: '24' },
    { code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: '61' },
    { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: '2' },
    { code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: '25' },
    { code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: '73' }
  ];
}
