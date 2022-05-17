import { Component, Input, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/models/educacion.model';
import { EducacionByTipo } from 'src/models/educacionByTipo.model';
import { TipoEducacion } from 'src/models/tipoEducacion.model';

@Component({
  selector: 'app-estudios-proyectos',
  templateUrl: './estudios-proyectos.component.html',
  styleUrls: ['./estudios-proyectos.component.css']
})
export class EstudiosProyectosComponent implements OnInit {
  @Input() educacionesByTipo:EducacionByTipo[];
  @Input() idPerfil:number;
  
  constructor() { }

  ngOnInit(): void {
    


  }
  
}
