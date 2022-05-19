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
  @Input() educaciones:Educacion[];
  @Input() idPerfil:number;
  

  tiposEducacion:TipoEducacion[];

  educacionesByTipos:EducacionByTipo[];
  constructor(private eduServ:EducacionService) { }

  ngOnInit(): void {
    this.eduServ.getTipoEducaciones().subscribe((tiposEducacion)=>{
      this.educacionesByTipos = this.mapEdusPorTipo(this.educaciones,tiposEducacion);

    })
  }
  mapEdusPorTipo(educaciones:Educacion[], tipos:TipoEducacion[]){
    
    let returnArr:EducacionByTipo[] = [];
    for(let tipo of tipos){      
      let edusPropias:Educacion[] = educaciones.filter((ed) => ed.idTipoEdu === tipo.id);     
     
      const edusPorTipo:EducacionByTipo = {
        tipoEdu:tipo,
        educaciones:edusPropias
      }
      returnArr.push(edusPorTipo);      
    }
    return returnArr;

  }
  
    
  
}
