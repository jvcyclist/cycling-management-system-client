import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rider } from '../models/rider.model';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  private url = environment.baseUrl + '/api/riders';

  constructor(private http: HttpClient) { }

  getAllRiders(): Observable<Rider[]>{
    return this.http.get<Rider[]>(this.url);
  }


}
