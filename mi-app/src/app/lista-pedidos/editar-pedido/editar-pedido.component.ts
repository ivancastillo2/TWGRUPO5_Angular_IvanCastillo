import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

pedido: Pedido;

  constructor() {
    this.pedido = {
      id: 0,
      desc: '',
      user: '',
      fechaPedido: new Date(),
      entregado: false
    }
  }

  ngOnInit(): void {
  }

  public onUpdateDescripcionPedido(event: any): void{
    this.pedido.desc = event.target.value;
  }

}
