import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() itens: MenuItem[] = [];
}

export interface MenuItem {
  label: string;
  url: string;
  icon?: string;
  subitens?: MenuItem[];
}