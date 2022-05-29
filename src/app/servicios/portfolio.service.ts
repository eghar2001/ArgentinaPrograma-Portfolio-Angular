import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/models/portfolio.model';
import { AutenticacionService } from './autenticacion.service';
import { PerfilService } from './perfil.service';
import { urlBack } from './urlBack';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioUrl:string = `${urlBack}/portfolio/traer/${this.perfServ.idPerfActual}`;  
  
  constructor(
    private http:HttpClient,
    private perfServ:PerfilService
    ) {

   }
  
  public getPortfolio():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.portfolioUrl);
  }
}
