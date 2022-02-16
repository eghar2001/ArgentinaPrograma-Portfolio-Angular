import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from 'src/app/interfaces/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl:string = 'http://localhost:3000/about';
  constructor(private http:HttpClient) {} 
  public getProfile():Observable<About>{
    return this.http.get<About>(this.apiUrl);  
  }
}
