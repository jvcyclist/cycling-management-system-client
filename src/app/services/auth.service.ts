import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl + '/api/auth'
  
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  login(form: any): Observable<any> {
    return this.http.post(this.url + '/signin', form, this.httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.url + '/signup', {
      username,
      email,
      password
    }, this.httpOptions);
  }

}
