import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/models/proyecto.model';

@Component({
  selector: 'app-edita-proyecto',
  templateUrl: './edita-proyecto.component.html',
  styleUrls: ['./edita-proyecto.component.css']
})
export class EditaProyectoComponent implements OnInit {
  @Input() proyOrig:Proyecto;
  @Output() proyEditado:EventEmitter<Proyecto> = new EventEmitter<Proyecto>();
  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private proyServ:ProyectoService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[this.proyOrig.nombre,[]],
      descripcion:[this.proyOrig.descripcion,[]],
      fondoUrl:[this.proyOrig.fondoUrl,[]],
      url:[this.proyOrig.url,[]]
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
        id:this.proyOrig.id,
        nombre: this.Nombre?.value,
        descripcion: this.Descripcion?.value,
        fondoUrl:this.FondoUrl?.value,
        url: this.Url?.value     
       
      }
      this.proyServ.editProyecto(proy).subscribe((proyecto)=>{
       
        this.proyEditado.emit(proyecto);
      }        
      );
 }
  }

}
