import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  private url = environment.baseUrl + '/api/achievement';

  constructor(private http: HttpClient) { }

  update(achievement: Achievement): Observable<Achievement>{
    return this.http.put<Achievement>(this.url, achievement);
  }

  save(achievement: Achievement, riderId: number): Observable<Achievement>{
    return this.http.post<Achievement>(this.url + '?riderId=' + riderId, achievement)
  }

}
