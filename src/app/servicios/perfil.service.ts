import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Perfil } from 'src/models/perfil.model';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';
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

    public editaRed(red:RedPerfil){
      const editRedUrl:string =`${this.perfilUrl}/1/editaRedPerfil`;
      return this.http.put<RedPerfil>(editRedUrl,red,httpOptions);
    }
    public agregaRed(red:RedPerfil):Observable<RedPerfil>{
      const addRedUrl:string = `${this.perfilUrl}/1/agregaRedPerfil`;
      return this.http.post<RedPerfil>(addRedUrl,red,httpOptions);
    }

    public borraRed(red:RedSocial){
      const deleteRedUrl:string = `${this.perfilUrl}/1/borraRedPerfil/${red.id}`
      return this.http.delete(deleteRedUrl);
    }
  

 
  
}
