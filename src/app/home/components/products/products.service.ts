import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly baseUrl: string = 'http://localhost:3001/api';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/product/all`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
