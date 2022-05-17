import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/models/educacion.model';
import { Fecha } from 'src/models/fecha.model';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() miEducacion:Educacion;
  @Output() editarEdu:EventEmitter<Educacion> = new EventEmitter<Educacion>();
  @Output() eliminarEdu:EventEmitter<Educacion> = new EventEmitter<Educacion>();


  fechaDesde:string;
  fechaHasta:string;
  constructor() { }

  ngOnInit(): void {
    this.fechaDesde = Fecha.getPartDateString(this.miEducacion.fechaDesde);
    this.fechaHasta = Fecha.getPartDateString(this.miEducacion.fechaHasta);
  }

  /*
    Funciones para manejo de eventos 
  */
  onEditar(){    
    this.editarEdu.emit(this.miEducacion);
  }
  onEliminar(){
    if(confirm(`Esta seguro que quiere eliminar la educacion \n${this.miEducacion.descripcion}?`)){
    this.eliminarEdu.emit(this.miEducacion);}
  }

}
