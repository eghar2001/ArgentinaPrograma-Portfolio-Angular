import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/interfaces/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl:string = 'http://localhost:3000/educacion';
  constructor(private http:HttpClient) { }
  public getEducaciones():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl);  
  }
}
