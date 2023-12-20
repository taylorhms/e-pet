import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadoComponent } from './pages/autenticado/autenticado.component';
import { HomeComponent } from './pages/autenticado/home/home.component';
import { ListaUsuariosComponent } from './pages/autenticado/usuarios/lista-usuarios/lista-usuarios.component';
import { FormUsuariosComponent } from './pages/autenticado/usuarios/form-usuarios/form-usuarios.component';
import { FormPedidosComponent } from './pages/autenticado/pedidos/form-pedidos/form-pedidos.component';
import { ListaPedidosComponent } from './pages/autenticado/pedidos/lista-pedidos/lista-pedidos.component';
import { FormProdutosComponent } from './pages/autenticado/produtos/form-produtos/form-produtos.component';
import { ListaProdutosComponent } from './pages/autenticado/produtos/lista-produtos/lista-produtos.component';
import { FormServicosComponent } from './pages/autenticado/servicos/form-servicos/form-servicos.component';
import { ListaServicosComponent } from './pages/autenticado/servicos/lista-servicos/lista-servicos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: AutenticadoComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'usuarios',
        children: [
          { path: 'novo', component: FormUsuariosComponent },
          { path: 'editar/:id', component: FormUsuariosComponent },
          { path: '', component: ListaUsuariosComponent }
        ]
      },
      {
        path: 'pedidos',
        children: [
          { path: 'novo', component: FormPedidosComponent },
          { path: 'editar/:id', component: FormPedidosComponent },
          { path: '', component: ListaPedidosComponent }
        ]
      },
      {
        path: 'produtos',
        children: [
          { path: 'novo', component: FormProdutosComponent },
          { path: 'editar/:id', component: FormProdutosComponent },
          { path: '', component: ListaProdutosComponent }
        ]
      },
      {
        path: 'servicos',
        children: [
          { path: 'novo', component: FormServicosComponent },
          { path: 'editar/:id', component: FormServicosComponent },
          { path: '', component: ListaServicosComponent }
        ]
      },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
