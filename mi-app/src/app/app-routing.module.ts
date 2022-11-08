import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPedidoComponent } from './lista-pedidos/editar-pedido/editar-pedido.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { PedidoComponent } from './lista-pedidos/pedido/pedido.component';

const routes: Routes = [
  { path: '', component: ListaPedidosComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'pedido/edit', component: EditarPedidoComponent},
  { path: 'pedido/:id', component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
