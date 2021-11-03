import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private url = environment.baseUrl + '/api/training';

  constructor(private http: HttpClient) { }

  getAllTrainings(): Observable<Training[]>{
    return this.http.get<Training[]>(this.url);
  }

  getTrainingById(id: number): Observable<Training> {
    return this.http.get<Training>(this.url + '/' + id);
  }

}
