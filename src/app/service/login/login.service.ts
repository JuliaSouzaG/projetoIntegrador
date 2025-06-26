import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  private tokenKey = 'token';

  url = 'http://localhost:3000/auth/login'

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post<any>(this.url, usuario);
  }

}
