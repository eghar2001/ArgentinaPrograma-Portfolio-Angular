import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/interfacesYModelos/experiencia.model';
const httpOptions={headers: new HttpHeaders({
  'Content-Type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private experienciaUrl:string = "http://localhost:3000/experiencias"
  constructor(private http:HttpClient) { }
  public getExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.experienciaUrl);
  };
  public agregarExperiencia(exp:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.experienciaUrl,exp,httpOptions);
  };
  public borrarExperiencia(id:number):Observable<Experiencia>{
    const url =`${this.experienciaUrl}/${id}`;    
     return  this.http.delete<Experiencia>(url);
  }
  public editarExperiencia(exp:Experiencia):Observable<Experiencia>{
    const url =`${this.experienciaUrl}/${exp.id}`;   
    return this.http.put<Experiencia>(url,exp,httpOptions);
  }
}
