import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bike } from '../models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private url = environment.baseUrl + '/api/bikes';

  constructor(private http: HttpClient) { }

  getAllBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.url);
  }

  getBikeById(id: number): Observable<Bike> {
    return this.http.get<Bike>(this.url + '/' + id)
  }

  saveBike(bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(this.url, bike);
  }


}
