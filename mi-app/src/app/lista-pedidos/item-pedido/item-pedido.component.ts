import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { LogService } from 'src/app/servicios/log.service';
import { PedidosHttpService } from 'src/app/servicios/pedidos-http.service';
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

  constructor(private pedidosHttpService: PedidosHttpService,
              private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  onEntregarPedido(){
    console.log(' llamar a un servicio que diga que esta entregado ');
    //this.pedidosService.cambiarEstadoPedido(this.id, true);
    let pmod = {id: this.id, desc: this.descripcion, user: 'Luis', entregado: true, fechaPedido: new Date()}

    this.pedidosHttpService.update(pmod).subscribe(
      (p: Pedido) => this.entregaRealizada.emit(this.id)
    );
  }

  onBorrarPedido() {
    console.log(' llamada ajax para borrar un pedido ')
    this.pedidosHttpService.delete(this.id).subscribe(
      (res) => {console.log('borrado' + res);
              this.entregaRealizada.emit(this.id)
            },
      error => alert('error ' +  error.message)
    );
  }
}
