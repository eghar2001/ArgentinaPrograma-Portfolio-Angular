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
  private apiUrl:string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  public getEducaciones(tipo:string):Observable<Educacion[]>{
    const url = `${this.apiUrl}/${tipo}`;
    console.log(url);
    return this.http.get<Educacion[]>(url);  
  }
  public agregaEducacion(edu:Educacion,tipo:string):Observable<Educacion>{
    const url = `${this.apiUrl}/${tipo}`;
    return this.http.post<Educacion>(url,edu,httpOptions);
  }
  public borrarEducacion(id:number,tipo:string):Observable<Educacion>{
    const url =`${this.apiUrl}/${tipo}/${id}`;    
     return  this.http.delete<Educacion>(url);
  }
}
