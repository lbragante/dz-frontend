import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Balance } from 'src/app/shared/models/Balance.model';
import { Statement } from 'src/app/shared/models/Statement.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceStatementService {

  readonly baseUrl: string = 'http://localhost:3001/api';

  constructor(private httpClient: HttpClient) { }

  getBalance(): Observable<Balance[]> {
    return this.httpClient.get<Balance[]>(`${this.baseUrl}/balance/all`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getStatement(): Observable<Statement[]> {
    return this.httpClient.get<Statement[]>(`${this.baseUrl}/statement/all`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
