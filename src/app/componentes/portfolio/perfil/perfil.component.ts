import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/models/perfil.model';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() perfil:Perfil;

  editarPerfilForm:boolean;
  editarRedesForm:boolean;


  constructor() {
    this.editarPerfilForm=false;
    this.editarRedesForm = false;
    
   }
   
  ngOnInit(): void {}

  /*
  Funcion que surgen de eventos tras finalizar correctamente los CU de los respectivos forms
  */
   actualizaPerfil(perf:Perfil){   
   
    this.perfil = perf;
    this.editarPerfilForm=false;
    
  }
  
  editarRedes(redes:RedPerfil[]){
    this.perfil.redesSociales = redes;
    this.editarRedesForm=false;
  }
  /*
    Funciones para el manejo de los botones
  */
  onCerrar(){
    this.editarPerfilForm = false;
    this.editarRedesForm = false;
  }
  onEditarPerfil(){
    this.editarPerfilForm=true;    
  } 
  onEditarRedes(){
    this.editarRedesForm=true;
  }

}
