import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/models/portfolio.model';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioUrl:string = "http://localhost:8080/portfolio/traer/1";  
  
  constructor(private http:HttpClient) { }
  
  public getPortfolio():Observable<Portfolio>{
    
    return this.http.get<Portfolio>(this.portfolioUrl);
  }
}
