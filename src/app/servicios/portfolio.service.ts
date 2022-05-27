import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/models/portfolio.model';
import { AutenticacionService } from './autenticacion.service';
import { PerfilService } from './perfil.service';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioUrl:string = `http://localhost:8080/portfolio/traer/${this.perfServ.idPerfActual}`;  
  
  constructor(
    private http:HttpClient,
    private perfServ:PerfilService
    ) {

   }
  
  public getPortfolio():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.portfolioUrl);
  }
}
