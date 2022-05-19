import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, Input, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/models/educacion.model';
import { EducacionByTipo } from 'src/models/educacionByTipo.model';




@Component({
  selector: 'app-listado-educacion',
  templateUrl: './listado-educacion.component.html',
  styleUrls: ['./listado-educacion.component.css']
})
export class ListadoEducacionComponent implements OnInit {
  @Input() edusByTipo:EducacionByTipo;
  @Input() idPerfil:number;

  eduAEditar:Educacion;


  
  /*
  Booleanos para abrir y cerrar formularios
  */
  formAgregar:boolean;
  formEditar:boolean;



  constructor(
    private eduServ:EducacionService
  ) {
    this.formAgregar = false;
    this.formEditar =false;

   }
   /*
   Funcion para el manejo del Drag and Drop
  */
   onDropped(event:CdkDragDrop<Educacion[]>){
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.edusByTipo.educaciones,anterior,actual);
}

   /*  
  Funcion que abre formulario para agregar educacion
  */
  onAgregar(){
    this.formAgregar = true;
    
  }
  onEditar(edu:Educacion){  
    this.eduAEditar = edu;    
    this.formEditar = true;    
  }
  onEliminar(edu:Educacion){
    this.eduServ.deleteEducacion(edu).subscribe((idEduEliminada)=>{
     
      this.edusByTipo.educaciones = this.edusByTipo.educaciones.filter((educacion) =>educacion.id !== idEduEliminada

      )
    });
  }
  /*
  Funcion que se llama una vez que la edu ya se guardo, se agrega al array de educaciones de eduByTipo
  */
  agregarEdu(edu:Educacion){
    this.edusByTipo.educaciones.push(edu);
    this.formAgregar = false;
  }
  editarEdu(edu:Educacion){
    let i:number = 0;
    while(i<this.edusByTipo.educaciones.length && this.edusByTipo.educaciones[i].id!= edu.id){
      i++;
    }
    this.edusByTipo.educaciones.splice(i,1,edu);
    this.formEditar = false;
  }

  /*
  Funcion que cierra formulario, cualquiera sea este
  */
 onCerrar(){
   this.formAgregar = false;
   this.formEditar=false;
   
 }
  ngOnInit(): void {
   
  }

}
