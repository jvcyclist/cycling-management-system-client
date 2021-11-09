import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Journey } from '../models/journey.model';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private url = environment.baseUrl + '/api/journey';

  constructor(private http: HttpClient) { }

  saveJourney(journey: Journey, raceId: number): Observable<Journey>{
    return this.http.put<Journey>(this.url + '?raceId=' + raceId, journey)
  }

}
