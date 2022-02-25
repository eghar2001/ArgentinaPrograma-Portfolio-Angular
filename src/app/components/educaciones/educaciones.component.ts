import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  constructor(private educacionServ:EducacionService) { }
  misEducaciones:Educacion[];
  animacionBotonAdd:boolean;
  formActivado:boolean;
  lastAlvId:number ;
  ngOnInit(): void {
    this.educacionServ.getEducaciones().subscribe((educ)=>
      {this.misEducaciones = educ;
      this.lastAlvId = educ[educ.length-1].id +1;
      }     
    )
    
    
    this.animacionBotonAdd = false;
    this.formActivado = false;
    this.lastAlvId ;
  }
  activoAnimacion(){
    this.animacionBotonAdd=true;
    setTimeout(()=>{this.animacionBotonAdd=false},500)
  }
  agregarEducacion(edu:Educacion){
    this.educacionServ.agregaEducacion(edu).subscribe(
      (educacion)=>{
        this.misEducaciones.push(educacion);        
      });
      this.lastAlvId++;
      this.formActivado = false;
  }
  abrirFormulario(){
  this.formActivado= true;
    
  }
  cerrarFormulario(){
    this.formActivado=false;
  }


}
