import { Component, Input, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() about?:string;
  formEditar:boolean;
  matches:RegExpMatchArray;
  
  /*
  determina si el usuario es un administrador o no
  */
  isAdmin:boolean;
  constructor(
    private auth:AutenticacionService
  ) { }

  ngOnInit(): void {
    this.formEditar = false;
    this.matches = this.saltoDeLinea(this.about);
    this.isAdmin = this.auth.IsAdmin;
  }
  /*
  Funcion que donde ve un \n inserta un salto de linea
  Retorna un array con cada parrafo
  */
  saltoDeLinea(str:string|undefined):RegExpMatchArray{
    if(str){
      const regex = /.+(?=\\n)/gm;
      const matches = str.match(regex);
      if(matches){
        return matches;
      }
      else{
        return [];
      }
   }
   else{
     return [];
   }

  }

  /*
  Funciones para el manejo de formulario
  */
  onEditar(){
    this.formEditar = true
  }
  onCerrar(){
    this.formEditar=false;
  }

  /*
  Funciones para actualizar lo mostrado tras un cambio
  */
  editarAbout(ab:string){
    this.about = ab;
    this.matches = this.saltoDeLinea(ab);
    this.formEditar=false;
  }
}
