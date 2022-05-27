import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill:Skill;

  @Output() editarSkill:EventEmitter<Skill>= new EventEmitter<Skill>();
  @Output() eliminarSkill:EventEmitter<Skill> = new EventEmitter<Skill>();

  isAdmin:boolean;
  constructor(
    private auth:AutenticacionService
  ) { }
  ngOnInit(): void {
    this.isAdmin=this.auth.IsAdmin;
  }
  parseString(num:number):string{
    return `${num}%`;
  }
  

  onEditar(){
    this.editarSkill.emit(this.skill);
  }
  onEliminar(){
    
    this.eliminarSkill.emit(this.skill);
  }

}
