import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Perfil } from 'src/models/perfil.model';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';

@Component({
  selector: 'app-perfil-content',
  templateUrl: './perfil-content.component.html',
  styleUrls: ['./perfil-content.component.css']
})
export class PerfilContentComponent implements OnInit {
  @Input() perfil:Perfil;
  @Output() editarPerfil:EventEmitter<null> = new EventEmitter<null>();
 
  constructor() { }
  formAgregarRed:boolean;
  formBorrarRed:boolean;
  formEditarRed:boolean;
  ngOnInit(): void {
    this.formAgregarRed = false;
    this.formBorrarRed = false;
    this.formEditarRed = false;
  }

  /*
  Fucniones para manejar el manejo de botones del componente
  */
  onEditarPerfil(){
    this.editarPerfil.emit();
  }

  onEditarRed(){
    this.formEditarRed = true;
  }

  onAgregarRed(){
    this.formAgregarRed = true;
  }
  onBorrarRed(){
    this.formBorrarRed = true;
  }
  onCerrar(){
    this.formAgregarRed = false;
    this.formBorrarRed = false;
    this.formEditarRed = false;
  }

  /*
  Funciones para plasmar cambios hechos en la BBDD en el front
  */
  agregarRed(red:RedPerfil){
    this.perfil.redesSociales.push(red);
    this.formAgregarRed =false;
  }
  borrarRed(red:RedSocial){
    this.perfil.redesSociales = this.perfil.redesSociales.filter((r)=>r.redSocial.id != red.id);
    this.formBorrarRed=false;
  }
  editarRed(red:RedPerfil){
    let i:number = 0;
    while(i<this.perfil.redesSociales.length && this.perfil.redesSociales[i].redSocial.id!= red.redSocial.id){
      i++;
    }
    this.perfil.redesSociales.splice(i,1,red);
    this.formEditarRed = false;
  }

}
