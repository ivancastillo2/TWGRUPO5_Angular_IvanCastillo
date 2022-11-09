import { TestBed } from '@angular/core/testing';

import { PedidosHttpService } from './pedidos-http.service';

describe('PedidosHttpService', () => {
  let service: PedidosHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
