import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
    private apiUrl = 'http://localhost:3003/usuarios'
  
    constructor(private http: HttpClient) { }
  
    getCurriculos(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl);
    }
  
    cadastrarCurriculo(usuario: Usuario): Observable<Usuario[]> {
      return this.http.post<Usuario[]>(this.apiUrl, usuario);
    }
  
    atualizarCurriculo(id: any, usuario:Usuario): Observable<Usuario[]>{
      const urlAtualizado = `${this.apiUrl}/${id}`;
      return this.http.put<Usuario[]>(urlAtualizado, usuario);
    }
    
    removerCurriculo(id:any): Observable<Usuario[]>{
      const urlDeletar = `${this.apiUrl}/${id}`;
      return this.http.delete<Usuario[]>(urlDeletar);
    }
}
