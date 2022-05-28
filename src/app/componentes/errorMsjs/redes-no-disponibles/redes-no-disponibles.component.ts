import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-no-disponibles',
  templateUrl: './redes-no-disponibles.component.html',
  styleUrls: ['./redes-no-disponibles.component.css']
})
export class RedesNoDisponiblesComponent implements OnInit {
  @Input() mensaje:string;
  constructor() { }

  ngOnInit(): void {
  }

}
