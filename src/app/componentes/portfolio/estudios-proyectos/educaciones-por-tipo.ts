import { Component, Input, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/models/educacion.model';
import { EducacionByTipo } from 'src/models/educacionByTipo.model';
import { TipoEducacion } from 'src/models/tipoEducacion.model';


@Component({
  selector: 'app-educaciones-por-tipo',
  templateUrl: './educaciones-por-tipo.html',
  styleUrls: ['./educaciones-por-tipo.css']
})
export class EducacionesPorTipoComponent implements OnInit {
  @Input() educaciones:Educacion[];

  

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
