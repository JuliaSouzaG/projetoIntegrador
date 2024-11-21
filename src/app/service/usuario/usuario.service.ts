import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/usuarios';

  criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url + '/criar', usuario);
  }

  listar(): Observable<any> {
    return this.http.get<any>(this.url + '/listar');
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `/excluir/${id}`);
  }

  editar(id: number, usuario: Usuario): Observable<any> {
    return this.http.put<any>(this.url + `/alterar/${id}`, usuario);
  }

}
