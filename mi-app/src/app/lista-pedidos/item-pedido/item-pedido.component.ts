import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosService } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.css']
})
export class ItemPedidoComponent implements OnInit {

  @Input() id: number = 0;
  @Input() descripcion: string = '';
  @Input() entregado: boolean = false;

  @Output() entregaRealizada: EventEmitter<number> = 
                    new EventEmitter<number>();

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
    console.log(' llamar a un servicio que diga que esta entregado ');
    this.pedidosService.cambiarEstadoPedido(this.id, true);
    this.entregaRealizada.emit(this.id);
  }
}
