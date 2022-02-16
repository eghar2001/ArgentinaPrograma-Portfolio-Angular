import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() miEducacion:Educacion;
  constructor() { }

  ngOnInit(): void {
  }

}
