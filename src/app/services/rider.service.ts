import { HttpClient, HttpResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
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

  getRidersWithSoonExpirationOfMedicalCard(): Observable<Rider[]>{
    return this.http.get<Rider[]>(this.url + '?mode=medical-card-soon-expired');
  }

  getRiderById(id: number): Observable<Rider>{
    return this.http.get<Rider>(this.url+'/'+id);
  }

  saveRider(rider: Rider): Observable<Rider>{
    return this.http.post<Rider>(this.url, rider);
  }

  deleteRiderById(id: number): Observable<Response>{
    return this.http.delete<Response>(this.url+'/'+id)
  }

  updateRider(rider: Rider): Observable<Rider>{
    return this.http.put<Rider>(this.url, rider);
  }

  getRidersByCategories(categories: string[]): Observable<Rider[]> {
    return this.http.get<Rider[]>(this.url+'?categories=' + categories.join(','));
  }

}
