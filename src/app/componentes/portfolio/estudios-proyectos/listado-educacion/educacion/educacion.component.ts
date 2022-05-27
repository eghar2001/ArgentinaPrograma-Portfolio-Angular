import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
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
  isAdmin:boolean;
  constructor(
    private auth:AutenticacionService
  ) { }

  ngOnInit(): void {
    this.fechaDesde = Fecha.getPartDateString(this.miEducacion.fechaDesde);
    this.fechaHasta = Fecha.getPartDateString(this.miEducacion.fechaHasta);
    this.isAdmin = this.auth.IsAdmin;
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
