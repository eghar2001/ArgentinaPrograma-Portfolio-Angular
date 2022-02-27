import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  @Input() tipo:string;
  constructor(private educacionServ:EducacionService) { }
  misEducaciones:Educacion[];
  animacionBotonAdd:boolean;
  formActivado:boolean;
  lastAlvId:number ;
  titulo:string;
  ngOnInit(): void {
    this.educacionServ.getEducaciones(this.tipo).subscribe((educ)=>
      {this.misEducaciones = educ;
      this.lastAlvId = educ[educ.length-1].id +1;
      }     
    )
    
    
    this.animacionBotonAdd = false;
    this.formActivado = false;
    this.titulo = this.tipo[0].toUpperCase() + this.tipo.slice(1);
  }
  activoAnimacion(){
    this.animacionBotonAdd=true;
    setTimeout(()=>{this.animacionBotonAdd=false},500)
  }
  agregarEducacion(edu:Educacion){
    this.educacionServ.agregaEducacion(edu,this.tipo).subscribe(
      (educacion)=>{
        this.misEducaciones.push(educacion);        
      });
      this.lastAlvId++;
      this.formActivado = false;
  }
  borrarEducacion(id:number){
    
    this.educacionServ.borrarEducacion(id,this.tipo).subscribe((eduBorrada)=>{
      this.misEducaciones = this.misEducaciones.filter((educacion) => educacion.id !== id)}
    );
  }
  abrirFormulario(){
  this.formActivado= true;
    
  }
  cerrarFormulario(){
    this.formActivado=false;
  }


}
