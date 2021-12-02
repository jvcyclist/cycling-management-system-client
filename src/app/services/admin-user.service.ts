import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private url = environment.baseUrl + '/api/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.url + '/' + id);
  }

}
