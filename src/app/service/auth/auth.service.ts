import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hasToken(): boolean {
    return !!localStorage.getItem(this.token);
  }

  private token = 'token';
  isAuthenticated$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }
  
    url = 'http://localhost:3000/auth';
  
    login(login: any): Observable<any> {
      return this.http.post<any>('http://localhost:3000/auth/login', login).pipe(
      tap(response => {
        typeof window !== 'undefined' ? localStorage.setItem(this.token, response.token) : null;
        this.isAuthenticated$.next(true);
      })
    );
    }

    logout() {
      localStorage.removeItem(this.token);
      this.isAuthenticated$.next(false);
    }

    getToken(): string | null {
      return localStorage.getItem(this.token);
    }
  
}
