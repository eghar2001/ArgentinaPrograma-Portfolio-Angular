import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from 'src/models/redSocial.model';
import { PerfilService } from './perfil.service';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  private redesUrl = 'http://localhost:8080/redSocial';
  constructor(
    private http:HttpClient,
    private perfServ:PerfilService
  ) { }

  public getRedes():Observable<RedSocial[]>{
    const getUrl = `${this.redesUrl}/traer`;
    return this.http.get<RedSocial[]>(getUrl);
  }
  public getRedesFaltantes():Observable<RedSocial[]>{
    const getFaltantesUrl = `${this.redesUrl}/traer/redesFaltantes/${this.perfServ.idPerfActual}`;
    return this.http.get<RedSocial[]>(getFaltantesUrl);
  }
}
