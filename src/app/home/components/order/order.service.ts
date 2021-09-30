import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly baseUrl: string = 'http://localhost:3001/api';

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.baseUrl}/order/all`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
