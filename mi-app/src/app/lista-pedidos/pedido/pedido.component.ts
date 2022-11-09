import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pedido } from 'src/app/model/pedido';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido;
  paramsSubscription: Subscription;

  constructor(private router: ActivatedRoute, 
              private pedidosService: PedidosService) {
    /*this.pedido = {id:1, 
                   desc:'Zapatos', 
                   entregado: false, 
                   fechaPedido: new Date(), 
                   user: "Luis"};*/
    this.pedido = this.pedidosService.getById(router.snapshot.params['id']);
    //nos suscribimos al cambio de parametros de la url
    this.paramsSubscription = this.router.params.subscribe(
      (params:Params)=> {
               this.pedido = this.pedidosService.getById(params['id']);
      }//fin funcion
    );
  }

  ngOnInit(): void {
  }

}
