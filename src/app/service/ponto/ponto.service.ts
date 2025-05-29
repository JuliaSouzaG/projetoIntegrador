import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ponto } from '../../model/ponto';

@Injectable({
  providedIn: 'root'
})
export class PontoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/pontos';

  criar(formulario: any): Observable<any> {
    return this.http.post<any>(`${this.url}/criar`, formulario);
  }

  listarTodos(): Observable<any> {
    return this.http.get<any>(this.url + '/listar');
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/excluir/${id}`);
  }

  editar(id: number, usuario: Ponto): Observable<any> {
    return this.http.put<any>(this.url + `/alterar/${id}`, usuario);
  }
  
  listar(id: number): Observable<any> {
    return this.http.get<any>(this.url + `/buscarlocal/${id}`);
  }

}
