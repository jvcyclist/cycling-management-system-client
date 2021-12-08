import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicalCard } from '../models/medical-card.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalCardService {

  private url = environment.baseUrl + '/api/medical-cards';

  constructor(private http: HttpClient) { }

  update(medicalCard: MedicalCard): Observable<MedicalCard>{
    return this.http.put<MedicalCard>(this.url, medicalCard);
  }

  save(medicalCard: MedicalCard, riderId: number): Observable<MedicalCard>{
    return this.http.post<MedicalCard>(this.url + '?riderId=' + riderId, medicalCard)
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.url + '/' + id)
  }

}
