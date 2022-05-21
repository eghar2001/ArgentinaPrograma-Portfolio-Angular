import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';

@Component({
  selector: 'app-borra-red-perfil',
  templateUrl: './borra-red-perfil.component.html',
  styleUrls: ['./borra-red-perfil.component.css']
})
export class BorraRedPerfilComponent implements OnInit {
  @Input() redes:RedPerfil[];
/*
Depende directamente del componente perfilContentComponent
*/

@Output() redBorrada:EventEmitter<RedSocial> = new EventEmitter<RedSocial>();
@Output() cerrarForm:EventEmitter<null> = new EventEmitter<null>();
/*
Array de redes que se muestra en el form
*/

form:FormGroup;
constructor(
  
  private formBuilder:FormBuilder,
  private perfServ:PerfilService
) { }

ngOnInit(): void {
  
  this.form = this.formBuilder.group({
    redSocial:[,[]]
    
  })
}

/*
Getters de los campos
*/
get RedSocial(){
  return this.form.get('redSocial');
}
/*
Funciones para manejar botones del form
*/
onCerrar(){
  this.cerrarForm.emit();
}

/*
Salida:
RedPerfil
{
  redSocial:RedSocial = {'id':number};
  url:string,
}
El id perfil sale de la url
*/
onEnviar(event:Event){
  event.preventDefault();
  if(this.form.valid &&
    confirm("Esta seguro que lo desea borrar? ")
    ){
    const redSocial:RedSocial={
      id:parseInt(this.RedSocial?.value)
    }
    this.perfServ.borraRed(redSocial).subscribe(()=>{
      this.redBorrada.emit(redSocial);
    })
  }
}


}
