import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url = environment.baseUrl + '/api/addresses';

  constructor(private http: HttpClient) { }

  save(address: Address): Observable<Address>{
    return this.http.put<Address>(this.url, address)
  }

}
