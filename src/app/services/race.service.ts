import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Race } from '../models/race.model';
import { Rider } from '../models/rider.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private url = environment.baseUrl + '/api/races';

  constructor(private http: HttpClient) { }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.url);
  }
  
  getNearestRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.url + '?mode=nearest-races');
  }
  
  getRaceById(id: number): Observable<Race> {
    return this.http.get<Race>(this.url + '/' + id)
  }

  addRace(race: Race): Observable<Race>{
     return this.http.post<Race>(this.url, race);
  }

  updateRace(race: Race): Observable<Race>{
    return this.http.put<Race>(this.url, race);
 }

 deleteRace(id: number): Observable<string>{
   return this.http.delete<string>(this.url + '/' + id);
 }

updateRiders(id: number, riders: Rider[]): Observable<Race> {
  return this.http.put<Race>(this.url + '/' + id + '/riders', riders)
}

}
