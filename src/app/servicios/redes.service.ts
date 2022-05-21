import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from 'src/models/redSocial.model';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  private redesUrl = 'http://localhost:8080/redSocial';
  constructor(
    private http:HttpClient
  ) { }

  public getRedes():Observable<RedSocial[]>{
    const getUrl = `${this.redesUrl}/traer`;
    return this.http.get<RedSocial[]>(getUrl);
  }
  public getRedesFaltantes():Observable<RedSocial[]>{
    const getFaltantesUrl = `${this.redesUrl}/traer/redesFaltantes/1`;
    return this.http.get<RedSocial[]>(getFaltantesUrl);
  }
}
