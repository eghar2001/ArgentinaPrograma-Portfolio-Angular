import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-edita-skill',
  templateUrl: './edita-skill.component.html',
  styleUrls: ['./edita-skill.component.css']
})
export class EditaSkillComponent implements OnInit {
  @Input() skillOrig:Skill;
  @Output() skillEditada:EventEmitter<Skill> = new EventEmitter<Skill>();

  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private skillServ:SkillService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion:[this.skillOrig.descripcion,[]],
      porcentaje:[this.skillOrig.porcentaje,[]]      
    })
  }
  get Porcentaje(){
    return this.form.get('porcentaje');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }
  pasaAPorcentaje(str:string){
    return str+"%";
  }
  onEnviar(event:Event){
    event.preventDefault();
 
    if(this.form.valid ){
      
      const skill:Skill ={
        id:this.skillOrig.id,        
        porcentaje: parseInt(this.Porcentaje?.value),
        descripcion: this.Descripcion?.value,
        
      }
      this.skillServ.editSkill(skill).subscribe((ski)=>{
          this.skillEditada.emit(ski);
        
      }        
      );
 }
}

}
