import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FechaService {
  private fechaUrl:string = 'http://localhost:8080/fecha/'; 
  constructor(private http:HttpClient) { }
  public getFechaActual():Observable<string>{
    return this.http.get<string>(this.fechaUrl + 'actual')
  }
}
