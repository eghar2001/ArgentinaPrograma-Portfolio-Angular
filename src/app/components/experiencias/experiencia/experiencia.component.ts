import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/interfacesYModelos/experiencia.model';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';
import { ResponsiveService } from 'src/app/servicios/responsive/responsive.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencia:Experiencia;
  @Output() editarEvent = new EventEmitter<Experiencia>();
  @Output() borrarEvent = new EventEmitter<number>();
  fechaInicio:Fecha;
  fechaFin:Fecha;
  periodoTrabajado:string;
  fondoUrl:string;
  ancho:number;
  
  constructor(private responsive:ResponsiveService) { }

  ngOnInit(): void {
    this.fechaInicio = new Fecha(0,this.experiencia.desde.mes,this.experiencia.desde.anio);
    this.fechaFin = new Fecha(0,this.experiencia.hasta.mes,this.experiencia.hasta.anio);
    this.fondoUrl = `url(${this.experiencia.fondoUrl})`;
    this.ancho = window.innerWidth;
    this.periodoTrabajado = Fecha.tiempoTrabajado(this.fechaInicio,this.fechaFin)
   
  
    }
  clickEditar(){
    this.editarEvent.emit(this.experiencia);
  }
  clickBorrar(){
    this.borrarEvent.emit(this.experiencia.id);
  }

  

}
