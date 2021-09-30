import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/Order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders$!: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  convertStatus(deliveryStatus: string) {
    if (deliveryStatus === 'separacao') {
      return 'Em separação';
    } else if (deliveryStatus === 'trajeto') {
      return 'Em trajeto';
    } else {
      return 'Entregue';
    }
  }

}
