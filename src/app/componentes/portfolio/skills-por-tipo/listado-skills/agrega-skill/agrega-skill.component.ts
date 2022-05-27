import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-agrega-skill',
  templateUrl: './agrega-skill.component.html',
  styleUrls: ['./agrega-skill.component.css']
})
export class AgregaSkillComponent implements OnInit {
  @Input() idTipo:number;
  @Output() skillAgregada:EventEmitter<Skill> = new EventEmitter<Skill>();

  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private skillServ:SkillService,
    private perfServ:PerfilService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion:[null,[]],
      porcentaje:[50,[]]      
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
        idPerfil: this.perfServ.idPerfActual,
        porcentaje: parseInt(this.Porcentaje?.value),
        descripcion: this.Descripcion?.value,
        idTipoSkill:this.idTipo
      }
      this.skillServ.createSkill(skill).subscribe((ski)=>{
          this.skillAgregada.emit(ski);
        
      }        
      );
 }
}

}
