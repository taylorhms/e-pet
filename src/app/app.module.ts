import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/autenticado/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AutenticadoComponent } from './pages/autenticado/autenticado.component';
import { ListaUsuariosComponent } from './pages/autenticado/usuarios/lista-usuarios/lista-usuarios.component';
import { ListaServicosComponent } from './pages/autenticado/servicos/lista-servicos/lista-servicos.component';
import { ListaPedidosComponent } from './pages/autenticado/pedidos/lista-pedidos/lista-pedidos.component';
import { ListaProdutosComponent } from './pages/autenticado/produtos/lista-produtos/lista-produtos.component';
import { FormUsuariosComponent } from './pages/autenticado/usuarios/form-usuarios/form-usuarios.component';
import { FormServicosComponent } from './pages/autenticado/servicos/form-servicos/form-servicos.component';
import { FormPedidosComponent } from './pages/autenticado/pedidos/form-pedidos/form-pedidos.component';
import { FormProdutosComponent } from './pages/autenticado/produtos/form-produtos/form-produtos.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InputComponent,
    HeaderComponent,
    MenuComponent,
    AutenticadoComponent,
    ListaUsuariosComponent,
    ListaServicosComponent,
    ListaPedidosComponent,
    ListaProdutosComponent,
    FormUsuariosComponent,
    FormServicosComponent,
    FormPedidosComponent,
    FormProdutosComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TagModule,
    ProgressSpinnerModule,
    PasswordModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
