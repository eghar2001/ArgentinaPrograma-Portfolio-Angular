import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/models/educacion.model';
import { TipoEducacion } from 'src/models/tipoEducacion.model';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private eduUrl:string = 'http://localhost:8080/educacion'; 
  constructor(private http:HttpClient) { }
  public getTipoEducaciones():Observable<TipoEducacion[]>{
    return this.http.get<TipoEducacion[]>(this.eduUrl +"/tipo/traer");
  }
  public createEducacion(edu:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.eduUrl+"/crear",edu,httpOptions);
  }
  public editEducacion(edu:Educacion):Observable<Educacion>{
    const editUrl:string =`${this.eduUrl}/editar`; 
    return this.http.put<Educacion>(editUrl,edu,httpOptions);
  }
  public deleteEducacion(edu:Educacion):Observable<number>{
    const deleteUrl:string = `${this.eduUrl}/borrar/${edu.id}`;
    
    return this.http.delete<number>(deleteUrl);
  }
}
