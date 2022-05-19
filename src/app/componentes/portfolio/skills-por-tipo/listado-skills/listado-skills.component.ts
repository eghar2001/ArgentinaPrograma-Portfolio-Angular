import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/models/skill.model';
import { SkillsByTipo } from 'src/models/skillsByTipo.model';

@Component({
  selector: 'app-listado-skills',
  templateUrl: './listado-skills.component.html',
  styleUrls: ['./listado-skills.component.css']
})
export class ListadoSkillsComponent implements OnInit {
  @Input() skillsByTipo:SkillsByTipo
  constructor(
    private skillServ:SkillService
  ) { }
  formAgregar:boolean;
  formEditar:boolean;
  skillAEditar:Skill;
  
  ngOnInit(): void {
    this.formAgregar = false;
    this.formEditar=false;
  }

  /*
  Funciones para el manejo de botones
  */
  onAgregar(){
    this.formAgregar=true;
  }
  onEditar(ski:Skill){
    this.skillAEditar=ski;
    this.formEditar = true
  }

  onCerrar(){
    this.formAgregar=false;
    this.formEditar=false;
  }
  onEliminar(ski:Skill){
    
    this.skillServ.deleteSkill(ski).subscribe(()=>{
     this.skillsByTipo.skills= this.skillsByTipo.skills.filter((skill) =>  skill.id !== ski.id);
    })
  }

  /*
  Funciones para "sincronizar" las acciones realizadas en la BBDD y el front
  */
  agregarSkill(ski:Skill){
    this.skillsByTipo.skills.push(ski);
    this.formAgregar=false;
  }
  editarSkill(ski:Skill){
    let i:number = 0;
    while(i<this.skillsByTipo.skills.length && this.skillsByTipo.skills[i].id!= ski.id){
      i++;
    }
    this.skillsByTipo.skills.splice(i,1,ski);
    this.formEditar = false;
  }
  

}
