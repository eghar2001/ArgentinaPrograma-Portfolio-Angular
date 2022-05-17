import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Perfil } from 'src/models/perfil.model';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private perfilUrl:string = 'http://localhost:8080/perfil'; 
  constructor(private http:HttpClient) { }
  public getPerfil():Observable<Perfil>{    
    return this.http.get<Perfil>(this.perfilUrl+'/traer/1');
  }


    public editProfile(perfilEditado:Perfil):Observable<Perfil>{
      return this.http.put<Perfil>(`${this.perfilUrl}/editar/1`,perfilEditado,httpOptions);
    }
  

 
  
}
