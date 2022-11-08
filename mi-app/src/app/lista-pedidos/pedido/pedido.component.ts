import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido;

  constructor(private router: ActivatedRoute, 
              private pedidosService: PedidosService) {
    /*this.pedido = {id:1, 
                   desc:'Zapatos', 
                   entregado: false, 
                   fechaPedido: new Date(), 
                   user: "Luis"};*/
    this.pedido = this.pedidosService.getById(router.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

}
