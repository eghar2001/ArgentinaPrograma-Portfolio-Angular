import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/models/skill.model';
import { SkillsByTipo } from 'src/models/skillsByTipo.model';
import { TipoSkill } from 'src/models/tipoSkill.model';

@Component({
  selector: 'app-skills-por-tipo',
  templateUrl: './skills-por-tipo.component.html',
  styleUrls: ['./skills-por-tipo.component.css']
})
export class SkillsPorTipoComponent implements OnInit {
  @Input() skills:Skill[] 
  

  skillsByTipos:SkillsByTipo[] = [];
  constructor(private skillServ:SkillService) { }
 
  

  ngOnInit(): void {      
      this.skillServ.getTiposSkill().subscribe((tiposSkill)=> {
        
        this.skillsByTipos = this.mapSkillPorTipo(this.skills,tiposSkill);
      });
   }

  mapSkillPorTipo(skills:Skill[], tipos:TipoSkill[]){
    
    let returnArr:SkillsByTipo[] = [];
    for(let tipo of tipos){      
      let skillsPropias:Skill[] = skills.filter(sk => sk.idTipoSkill === tipo.id);     
      const skillsPorTipo:SkillsByTipo = {
        tipoSkill:tipo,
        skills:skillsPropias
      }
      returnArr.push(skillsPorTipo);      
    }
    return returnArr;

  }
  
}
