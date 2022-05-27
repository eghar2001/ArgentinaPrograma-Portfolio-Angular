import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Experiencia } from 'src/models/experiencia.model';
import { Fecha } from 'src/models/fecha.model';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Input() miExperiencia:Experiencia;

  @Output() editarExp:EventEmitter<Experiencia> = new EventEmitter<Experiencia>();
  @Output() eliminarExp:EventEmitter<Experiencia> = new EventEmitter<Experiencia>();

  fechaDesde:string;
  fechaHasta:string;
  fondoUrl:string;

  isAdmin:boolean;
  constructor(
    private auth:AutenticacionService
  ) { }

  ngOnInit(): void {
    this.fechaDesde = Fecha.getPartDateString(this.miExperiencia.fechaDesde);
    this.fechaHasta = Fecha.getPartDateString(this.miExperiencia.fechaHasta);
    this.fondoUrl = `url(${this.miExperiencia.fondoUrl})`;

    this.isAdmin= this.auth.IsAdmin;
  }

  /*
  Funciones de botones del componente
  */
  onEdit(){
    this.editarExp.emit(this.miExperiencia);
  }

  onDelete(){
    
    if(confirm(`Esta seguro que quiere eliminar la educacion \n${this.miExperiencia.cargo}?`)){
    this.eliminarExp.emit(this.miExperiencia);
    }
  }

}
