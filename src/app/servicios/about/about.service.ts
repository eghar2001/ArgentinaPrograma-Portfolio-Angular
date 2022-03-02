import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from 'src/app/interfacesYModelos/about.model';
const httpOptions={headers: new HttpHeaders({
  'Content-Type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }
  aboutUrl = 'http://localhost:3000/about';
  getAbout():Observable<About>{
    return this.http.get<About>(this.aboutUrl);
  }
  editAbout(nuevoAbout:About):Observable<About>{
    return this.http.put<About>(this.aboutUrl,nuevoAbout,httpOptions)
  }
}
