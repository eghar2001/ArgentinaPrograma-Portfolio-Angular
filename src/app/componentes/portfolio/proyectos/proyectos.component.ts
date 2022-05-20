import { Component, Input, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/models/proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() proyectos:Proyecto[];
  constructor(
    private proyServ:ProyectoService
  ) { }
  formAgregar:boolean;
  formEditar:boolean;

  /*
  Se guarda solo para comunicarse con el componente editar proyecto
  */
  proyAEditar:Proyecto;
  ngOnInit(): void {
    this.formAgregar=false;
    this.formEditar = false;
  }
  pasaAUrl(str:string):string{
    return `url(${str})`
  }

  /*
  eventos de manejo de formularios
  */
  onAgregar(){
    this.formAgregar= true;
  }
  onEditar(proy:Proyecto){
    this.proyAEditar = proy;
    this.formEditar = true;
  }
  onCerrar(){
    this.formAgregar=false;
    this.formEditar = false;
  }
  onDelete(proy:Proyecto){
    this.proyServ.deleteProyecto(proy).subscribe(()=>{    
      this.proyectos = this.proyectos.filter((p) => p.id != proy.id);
    })
  }

  /*
  Eventos recibidos de los formularios
  */
  agregarProy(proy:Proyecto){
    this.proyectos.push(proy);
  }
  editarProy(proy:Proyecto){
    let i = 0;
    while(i<this.proyectos.length && this.proyectos[i].id !== proy.id ){
      i++;
    }
    this.proyectos.splice(i,1,proy);
    this.formEditar = false;
  }

  

}
