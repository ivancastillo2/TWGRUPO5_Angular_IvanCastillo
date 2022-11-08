import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: Pedido[] = [
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
  ];

  constructor() { }

  public getAll(): Pedido[]{
    return this.pedidos;
  }

  public getById(id: number): Pedido {
    var pedido !: Pedido;
    this.pedidos.forEach(p => {
      if(p.id == id) { 
       pedido = p;
      }
    });
    return pedido;
  }

  public add(p: Pedido) {
    this.pedidos.push(p);
  }

  public cambiarEstadoPedido(id: number, entregado: boolean) {
    this.pedidos.forEach(p => {
      if(p.id === id) {
        p.entregado = entregado;
      }
    });
  }
}
