import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() miEducacion:Educacion;
  @Output() borrarEdu = new EventEmitter<number>();
  @Output() editarEdu = new EventEmitter<Educacion>();
  fechaInicio:Fecha;
  fechaFin:Fecha;
  constructor() { }

  ngOnInit(): void {
    this.fechaInicio = new Fecha(this.miEducacion.desde.mes,this.miEducacion.desde.anio);
    this.fechaFin = new Fecha(this.miEducacion.hasta.mes,this.miEducacion.hasta.anio)
  }
  borraEducacion():void{
    this.borrarEdu.emit(this.miEducacion.id);
  }
  editarEducacion(){
    this.editarEdu.emit(this.miEducacion);
  }

}
