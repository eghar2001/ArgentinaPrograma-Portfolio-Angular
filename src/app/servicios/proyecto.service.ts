import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/models/proyecto.model';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }
  private proyectoUrl:string = "http://localhost:8080/proyecto";  

  public createProyecto(proy:Proyecto):Observable<Proyecto>{
    const crearUrl:string = `${this.proyectoUrl}/crear`;
    return this.http.post<Proyecto>(crearUrl,proy,httpOptions);
  }
  public editProyecto(proy:Proyecto):Observable<Proyecto>{
    const editUrl:string = `${this.proyectoUrl}/editar`;
    return this.http.put<Proyecto>(editUrl,proy,httpOptions);
  }

  public deleteProyecto(proy:Proyecto){
    const deleteUrl:string = `${this.proyectoUrl}/borrar/${proy.id}`;
    return this.http.delete<Proyecto>(deleteUrl);
  }
}
