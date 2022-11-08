import { Component, OnInit } from '@angular/core';
import { Pedido } from '../model/pedido';
import { LogService } from '../servicios/log.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  estadoListadoPedidos: String = 'noEntregado';
  modoNuevo: boolean = false;

  constructor(private log:LogService) {

    this.pedidos = [
      {
        id:1,
        user: "luis",
        desc: "pizza",
        fechaPedido: new Date(),
        entregado: false
      },
      {
        id:2,
        user: "luis",
        desc: "Moto",
        fechaPedido: new Date(),
        entregado: true
      },
      {
        id:3,
        user: "Maite",
        desc: "Camisa",
        fechaPedido: new Date(),
        entregado: false
      }
    ]

  }

  ngOnInit(): void {
  }

  public onAltaPedido():void{
    this.log.info('Abrir formulario alta nuevo pedido');
  }

  public onTerminoEntrega(id: number) {
    console.log(" me notifican que ha cambiado pedido " + id);
    this.pedidos[id - 1].entregado = true;
  }

}
