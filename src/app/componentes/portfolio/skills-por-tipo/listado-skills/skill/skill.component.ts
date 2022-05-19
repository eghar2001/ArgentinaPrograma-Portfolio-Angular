import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor() { }
  parseString(num:number):string{
    return `${num}%`;
  }
  ngOnInit(): void {
  }

  onEditar(){
    this.editarSkill.emit(this.skill);
  }
  onEliminar(){
    
    this.eliminarSkill.emit(this.skill);
  }

}
