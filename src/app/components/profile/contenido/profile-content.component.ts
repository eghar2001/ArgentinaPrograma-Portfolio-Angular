import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';
import { Profile } from 'src/app/interfacesYModelos/profile.model';


@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {
  @Input() perfil:Profile;
  @Input() edad:number;
  @Output() abrirEvent = new EventEmitter()
  
  
  constructor() { }

  ngOnInit(): void {
    
  }
  activaEditar(){
    this.abrirEvent.emit();
  }

}
