import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfacesYModelos/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl:string = 'http://localhost:3000/profile'
  constructor(private http:HttpClient) {} 
  public getProfile():Observable<Profile>{
    return this.http.get<Profile>(this.apiUrl);  
  }
}
