import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/models/educacion.model';
import { Experiencia } from 'src/models/experiencia.model';
import { TipoJornada } from 'src/models/tipoJornada.model';
import { urlBack } from './urlBack';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private expUrl = `${urlBack}/experiencia`;
  constructor(
    private http:HttpClient
  ) { }
  public getTipoJornadas():Observable<TipoJornada[]>{
    const tiposJornadaUrl:string =`${this.expUrl}/tipoJornada/traer`; 
    return this.http.get<TipoJornada[]>(tiposJornadaUrl);
  }
  public createExperiencia(exp:Experiencia):Observable<Experiencia>{
    const crearExpUrl:string = `${this.expUrl}/crear`;
    return this.http.post<Experiencia>(crearExpUrl,exp,httpOptions);
  }
  public editExperiencia(exp:Experiencia):Observable<Experiencia>{
    const editExpUrl:string = `${this.expUrl}/editar`;
    return this.http.put<Experiencia>(editExpUrl,exp,httpOptions);
  }
  public deleteExperiencia(exp:Experiencia){
    const delExpUrl:string = `${this.expUrl}/borrar/${exp.id}`;
    return this.http.delete<Experiencia>(delExpUrl);
  }
}
