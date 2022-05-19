import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/models/skill.model';
import { TipoSkill } from 'src/models/tipoSkill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skillUrl:string = "http://localhost:8080/skill";  
  constructor(private http:HttpClient) { }

  public  getTiposSkill():Observable<TipoSkill[]>{
    const traerTiposUrl:string = `${this.skillUrl}/tipo/traer`;
    return this.http.get<TipoSkill[]>(traerTiposUrl);
  }
  public createSkill(skill:Skill):Observable<Skill>{
    const crearSkillUrl:string = `${this.skillUrl}/crear`;
    return this.http.post<Skill>(crearSkillUrl,skill);
  }
  public editSkill(skill:Skill):Observable<Skill>{
    const editSkillUrl:string = `${this.skillUrl}/editar`;
    return this.http.put<Skill>(editSkillUrl,skill);
  }
  public deleteSkill(skill:Skill){
    const deleteSkillUrl:string = `${this.skillUrl}/borrar/${skill.id}`;
    return this.http.delete<Skill>(deleteSkillUrl);
  }
  
}
