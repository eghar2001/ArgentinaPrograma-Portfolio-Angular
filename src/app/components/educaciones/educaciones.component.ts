import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';


@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  //Inputs y outputs
  @Input() tipo:string;

  //Constructor
  constructor(private educacionServ:EducacionService) { }
  
  //declaraciones de propiedades
  misEducaciones:Educacion[];
  animacionBotonAdd:boolean;
  formActivado:boolean;
  lastAlvId:number ;
  titulo:string;
  editar:boolean;
  educacionAEditar:Educacion;

  //onInit
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



  //Funciones relacionadas con el manejo del formulario
  abrirFormulario(){  
   this.formActivado= true;    
  }
  abrirEditar(educacion:Educacion){
    this.editar = true;
    this.educacionAEditar = educacion;
    this.abrirFormulario();    
    }
  abrirAgregarEdu(){
    this.editar=false;
    this.abrirFormulario();
  }
  cerrarFormulario(){
    this.formActivado=false;
  }

  //Funciones relacionadas con el servicio
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
  editarEducacion(edu:Educacion){
    this.educacionServ.editarEducacion(edu,this.tipo).subscribe((eduEditada) => {
      let index:number = 0;
      while (edu.id !== this.misEducaciones[index].id && this.misEducaciones.length>index++){};
      this.misEducaciones.splice(index,1,eduEditada);
    })
    this.cerrarFormulario();
  }

}
