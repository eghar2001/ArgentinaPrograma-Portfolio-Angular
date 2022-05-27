import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Authority } from 'src/models/authority.model';
import { Login } from 'src/models/login.model';
import { Mensaje } from 'src/models/mensaje.model';
import { NuevoUsuario } from 'src/models/nuevoUsuario.model';
import { Token } from 'src/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl:string = 'http://localhost:8080/auth';
  currentUserSubject:BehaviorSubject<any>;
  private isAdmin:boolean;
  constructor(
    private http:HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
    if(this.currentUserSubject.value.authorities){
      this.isAdmin = this.determinaAdmin(this.currentUserSubject.value.authorities);
    }
    console.log(this.isAdmin);
  
  }
  
  login(credenciales:Login):Observable<any>{
    const loginUrl:string = `${this.authUrl}/login`
    return this.http.post<any>(loginUrl,credenciales).pipe(map((data:any) => {
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
      
      this.isAdmin = this.determinaAdmin(data.authorities);
      console.log(this.isAdmin);
      return data;
    }))
  }
  register(credenciales:NuevoUsuario):Observable<Mensaje>{
    const registerUrl:string = `${this.authUrl}/nuevo`;
    return this.http.post<Mensaje>(registerUrl,credenciales);
  }
  get UsuarioAutenticado():Token{
    return this.currentUserSubject.value;
  }
  get IsAdmin():boolean{
    return this.isAdmin;
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
