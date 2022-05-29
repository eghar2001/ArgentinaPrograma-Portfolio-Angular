import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Authority } from 'src/models/authority.model';
import { Login } from 'src/models/login.model';
import { NuevoUsuario } from 'src/models/nuevoUsuario.model';
import { Token } from 'src/models/token.model';
import { ValidacionesAuth } from 'src/models/validacionesAuth.model';
import { urlBack } from './urlBack';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl:string = `${urlBack}/auth`;
  currentUserSubject:BehaviorSubject<any>;
  private isAdmin:boolean;
  private isUser:boolean;
  constructor(
    private http:HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
    if(this.currentUserSubject.value.authorities){
      this.isAdmin = this.determinaAdmin(this.currentUserSubject.value.authorities);
    }
   
  }

  
  
  login(credenciales:Login):Observable<any>{
    const loginUrl:string = `${this.authUrl}/login`
    return this.http.post<any>(loginUrl,credenciales).pipe(map((data:any) => {
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
      this.isAdmin = this.determinaAdmin(data.authorities);
      return data;
    }))
  }
  register(credenciales:NuevoUsuario):Observable<string>{
    const registerUrl:string = `${this.authUrl}/nuevo`;
    return this.http.post<string>(registerUrl,credenciales);
  }
  get UsuarioAutenticado():Token{
    return this.currentUserSubject.value;
  }
  get IsAdmin():boolean{
    return this.isAdmin;
  }
  get IsUser():boolean{
    return this.isUser;
  }
  public getValidaciones():Observable<ValidacionesAuth>{
    return this.http.get<ValidacionesAuth>(`${this.authUrl}/validaciones`)
  }

  

  private determinaAdmin(authorities:Authority[]):boolean{
    let esAdmin:boolean = false;
    for(let i = authorities.length -1; i>=0;i--){
      if(authorities[i].authority === "ROLE_ADMIN"){
        esAdmin = true;
        break;
      }
    }
    return esAdmin;
  }


  
 
}
