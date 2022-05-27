import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import {Proyecto} from '../../../../../models/proyecto.model';

@Component({
  selector: 'app-agrega-proyecto',
  templateUrl: './agrega-proyecto.component.html',
  styleUrls: ['./agrega-proyecto.component.css']
})
export class AgregaProyectoComponent implements OnInit {


  @Output() proyGuardado:EventEmitter<Proyecto> = new EventEmitter<Proyecto>();
  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private proyServ:ProyectoService,
    private perfServ:PerfilService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[null,[]],
      descripcion:[null,[]],
      fondoUrl:[null,[]],
      url:[null,[]]
    })
  }

  /*
  Getters de atirbutos del formulario
  */
  get Nombre(){
    return this.form.get('nombre');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }
  get FondoUrl(){
    return this.form.get('fondoUrl');
  }
  get Url(){
    return this.form.get('url');
  }

  onEnviar(event:Event){
    event.preventDefault();
 
    if(this.form.valid ){
      
      const proy:Proyecto ={
        idPerfil:this.perfServ.idPerfActual,
        nombre: this.Nombre?.value,
        descripcion: this.Descripcion?.value,
        fondoUrl:this.FondoUrl?.value,
        url: this.Url?.value     
       
      }
      this.proyServ.createProyecto(proy).subscribe((proyecto)=>{
       
        this.proyGuardado.emit(proyecto);
      }        
      );
 }
  }

}
