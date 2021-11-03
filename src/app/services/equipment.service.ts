import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private url = environment.baseUrl + '/api/equipments';

  constructor(private http: HttpClient) { }

  getAllEquipment(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.url);
  }

}
