import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';
import { PedidosHttpService } from '../servicios/pedidos-http.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  estadoListadoPedidos: String = 'noEntregado';
  modoNuevo: boolean = false;

  constructor(private log:LogService, private pedidosService: PedidosHttpService, private router: Router) {
    //this.pedidos = pedidosService.getAll();
    pedidosService.getAll().subscribe(
          (listaPedidos: Pedido[]) => this.pedidos = listaPedidos
    );
  }

  ngOnInit(): void {
  }

  public onAltaPedido():void{
    this.log.info('Abrir formulario alta nuevo pedido');
    this.router.navigate(['/pedido/edit']);
  }

  public onTerminoEntrega(id: number) {
    console.log(" me notifican que ha cambiado pedido " + id);
    this.pedidosService.getAll().subscribe(
      (listaPedidos: Pedido[]) => this.pedidos = listaPedidos
    );
  }

}
