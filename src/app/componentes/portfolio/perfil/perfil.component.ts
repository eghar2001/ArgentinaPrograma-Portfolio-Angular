import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/models/perfil.model';
import { RedSocial } from 'src/models/redSocial.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() perfil:Perfil;

  editar:boolean;


  constructor() {
    this.editar=false;
    
   }

  ngOnInit(): void {}
  onEditar(){
    this.editar=true;
    
  }
  actualizaPerfil(perf:Perfil){
    
   
    this.perfil = perf;
    this.editar=false;
    
  }
  cerrarFormulario(){
    this.editar = false;
  }

}
