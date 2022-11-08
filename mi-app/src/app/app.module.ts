import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';
import { EditarPedidoComponent } from './lista-pedidos/editar-pedido/editar-pedido.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemPedidoComponent } from './lista-pedidos/item-pedido/item-pedido.component';
import { LogService } from './servicios/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaPedidosComponent,
    PedidoComponent,
    EditarPedidoComponent,
    ItemPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeEs, 'es');
