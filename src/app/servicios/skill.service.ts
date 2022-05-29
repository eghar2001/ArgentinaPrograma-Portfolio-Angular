import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/models/skill.model';
import { TipoSkill } from 'src/models/tipoSkill.model';
import { urlBack } from './urlBack';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillUrl:string = `${urlBack}/skill`;  
  constructor(private http:HttpClient) { }

  public  getTiposSkill():Observable<TipoSkill[]>{
    const traerTiposUrl:string = `${this.skillUrl}/tipo/traer`;
    return this.http.get<TipoSkill[]>(traerTiposUrl,httpOptions);
  }
  public createSkill(skill:Skill):Observable<Skill>{
    const crearSkillUrl:string = `${this.skillUrl}/crear`;
    return this.http.post<Skill>(crearSkillUrl,skill,httpOptions);
  }
  public editSkill(skill:Skill):Observable<Skill>{
    const editSkillUrl:string = `${this.skillUrl}/editar`;
    return this.http.put<Skill>(editSkillUrl,skill,httpOptions);
  }
  public deleteSkill(skill:Skill){
    const deleteSkillUrl:string = `${this.skillUrl}/borrar/${skill.id}`;
    return this.http.delete<Skill>(deleteSkillUrl);
  }
  
}
