import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Perfil } from 'src/models/perfil.model';

@Component({
  selector: 'app-perfil-content',
  templateUrl: './perfil-content.component.html',
  styleUrls: ['./perfil-content.component.css']
})
export class PerfilContentComponent implements OnInit {
  @Input() perfil:Perfil;
  @Output() editarEvent:EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }
  onEditar(){
    this.editarEvent.emit();
  }

}
