import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../../model/locais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/locais';

  criar(local: any): Observable<any> {
    return this.http.post<any>(this.url + '/criar', local)
  }

  listar(): Observable<any> {
    return this.http.get<any>(this.url + '/listar');
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/excluir/${id}`);
  }

  editar(id: number, local: any): Observable<any> {
    return this.http.put<any>(this.url + `/alterar/${id}`, local);
  }
  
}
