import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from 'src/models/about.model';

import { Perfil } from 'src/models/perfil.model';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';
import { urlBack } from './urlBack';
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
  private perfilUrl:string = `${urlBack}/perfil`; 

  constructor(private http:HttpClient) { }
  public idPerfActual:number = 2;
  public getPerfil():Observable<Perfil>{    
    return this.http.get<Perfil>(this.perfilUrl+'/traer/1');
  }


    public editProfile(perfilEditado:Perfil):Observable<Perfil>{
      return this.http.put<Perfil>(`${this.perfilUrl}/editar/${this.idPerfActual}`,perfilEditado,httpOptions);
    }
    
    public editaAbout(ab:About){
      const editAboutUrl:string = `${this.perfilUrl}/${this.idPerfActual}/editaAbout`
      return this.http.put<About>(editAboutUrl,ab);
    }

    public editaRed(red:RedPerfil){
      const editRedUrl:string =`${this.perfilUrl}/${this.idPerfActual}/editaRedPerfil`;
      return this.http.put<RedPerfil>(editRedUrl,red,httpOptions);
    }
    public agregaRed(red:RedPerfil):Observable<RedPerfil>{
      const addRedUrl:string = `${this.perfilUrl}/${this.idPerfActual}/agregaRedPerfil`;
      return this.http.post<RedPerfil>(addRedUrl,red,httpOptions);
    }

    public borraRed(red:RedSocial){
      const deleteRedUrl:string = `${this.perfilUrl}/${this.idPerfActual}/borraRedPerfil/${red.id}`
      return this.http.delete(deleteRedUrl);
    }
  

 
  
}
