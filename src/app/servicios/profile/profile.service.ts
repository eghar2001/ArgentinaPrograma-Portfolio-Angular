import { Injectable } from '@angular/core';
import { Profile } from 'src/app/interfacesYModelos/profile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = 'http://localhost:3000/profile';
  constructor(private http:HttpClient) { }
  getProfile():Observable<Profile>{
    return this.http.get<Profile>(this.profileUrl);
  }
}
