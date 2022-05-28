import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, Input, OnInit } from '@angular/core';
import { laFade } from 'src/app/animations';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/models/experiencia.model';


@Component({
  selector: 'app-listado-experiencia',
  templateUrl: './listado-experiencia.component.html',
  styleUrls: ['./listado-experiencia.component.css'],
  animations:[
     laFade
  ]
})
export class ListadoExperienciaComponent implements OnInit {

  @Input() experiencias:Experiencia[];
  constructor(
    private expServ:ExperienciaService,
    private auth:AutenticacionService
  ) { }
  /*
  Booleanos para el manejo de los botones
  */
  formAgregar:boolean;
  formEditar:boolean;

  isAdmin:boolean;
  /*
  Para comunicarse con el componente editaExperiencia
  */
  expAEditar:Experiencia;

  ngOnInit(): void {
    this.formAgregar=false;
    this.isAdmin = this.auth.IsAdmin;
  }

  /*
  Fucion que retorna el evento del drag and drop
  */
   onDropped(event:CdkDragDrop<Experiencia[]>){
      const anterior = event.previousIndex;
      const actual = event.currentIndex;
      moveItemInArray(this.experiencias,anterior,actual);
 }
  /*
  Funciones que manejan eventos realizados en subcomponentes
  */
  onAgregar(){
    this.formAgregar = true;    
  }
  onEditar(exp:Experiencia){
    this.expAEditar = exp;
    this.formEditar= true;    
  }
  onCerrar(){
    this.formAgregar = false;
    this.formEditar=false;    
  }
  onEliminar(exp:Experiencia){
    this.expServ.deleteExperiencia(exp).subscribe(()=>{
      this.experiencias = this.experiencias.filter((experiencia) => experiencia.id !== exp.id);
    })
  }

  /*
  Funciones que se encargan de manejar los cambios en la BBDD en el front
  */
  agregarExp(exp:Experiencia){
    this.experiencias.push(exp);
    this.formAgregar = false;
  }
  editarExp(exp:Experiencia){
    let i = 0;
    while(i<this.experiencias.length && this.experiencias[i].id !== exp.id ){
      i++;
    }
    this.experiencias.splice(i,1,exp);
    this.formEditar = false;
  }

}
