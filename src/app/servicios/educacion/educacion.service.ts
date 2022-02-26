import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
const httpOptions={headers: new HttpHeaders({
  'Content-Type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl:string = 'http://localhost:3000/educaciones';
  constructor(private http:HttpClient) { }
  public getEducaciones():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl);  
  }
  public agregaEducacion(edu:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl,edu,httpOptions);
  }
  public borrarEducacion(id:number):Observable<Educacion>{
    const url =`${this.apiUrl}/${id}`;    
     return  this.http.delete<Educacion>(url);
  }
}
