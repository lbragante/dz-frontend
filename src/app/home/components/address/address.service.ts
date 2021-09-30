import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/models/Address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  readonly baseUrl: string = 'http://localhost:3001/api';

  constructor(private httpClient: HttpClient) { }

  saveAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(`${this.baseUrl}/address/create`, address);
  }
}
