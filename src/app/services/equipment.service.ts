import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private url = environment.baseUrl + '/api/equipment';

  constructor(private http: HttpClient) { }

  getAllEquipment(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.url);
  }

  updateEquipment(equipment: Equipment): Observable<Equipment>{
    return this.http.post<Equipment>(this.url, equipment);
  }

  saveEquipment(equipment: Equipment): Observable<Equipment>{
    return this.http.put<Equipment>(this.url, equipment);
  }

  getEquipmentById(id: number): Observable<Equipment>{
    return this.http.get<Equipment>(this.url + '/' + id);
  }
}
