import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfacesYModelos/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  misExperiencias:Experiencia[];
  formActivado:boolean;
  lastAlvId:number;
  editar:boolean;
  expAEditar:Experiencia;
  constructor(private expServ:ExperienciaService) { }

  ngOnInit(): void {
    this.expServ.getExperiencias().subscribe((experiencias)=>
    {
      this.misExperiencias = experiencias;
      this.lastAlvId = experiencias[experiencias.length-1].id +1;
    })
    this.formActivado=false;
    this.editar=false
  }
  abrirFormulario(){
    this.formActivado = true;
  }
  cerrarFormulario(){
    this.formActivado = false;
  }
  abrirEditar(exp:Experiencia){
    this.editar=true;
    this.expAEditar = exp;
    this.abrirFormulario();
  }
  abrirAgregar(){
    this.editar=false;
    this.abrirFormulario();
  }

  agregarExperiencia(exp:Experiencia){
    this.expServ.agregarExperiencia(exp).subscribe((experiencie)=>{
      this.misExperiencias.push(experiencie);
      this.lastAlvId++;
    });
    this.cerrarFormulario();
  }
  editarExperiencia(exp:Experiencia){
    this.expServ.editarExperiencia(exp).subscribe((experiencie)=>{
      let index:number = 0;
      while (experiencie.id !== this.misExperiencias[index].id && this.misExperiencias.length>index++){};
      this.misExperiencias.splice(index,1,experiencie);
    });
    this.cerrarFormulario();
  }
  borrarExperiencia(id:number){
    this.expServ.borrarExperiencia(id).subscribe((experiencie)=>{
      this.misExperiencias = this.misExperiencias.filter((exp) => exp.id !== id)}
    )
  }




}
