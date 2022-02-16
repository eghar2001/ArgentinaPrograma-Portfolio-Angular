import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  constructor(private educacionServ:EducacionService) { }
  misEducaciones:Educacion[];
  ngOnInit(): void {
    this.educacionServ.getEducaciones().subscribe((educ)=>{
      this.misEducaciones = educ;
    })
  }

}
