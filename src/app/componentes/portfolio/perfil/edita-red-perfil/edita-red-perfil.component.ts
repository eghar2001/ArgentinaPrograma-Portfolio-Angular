import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { RedService } from 'src/app/servicios/redes.service';
import { RedPerfil } from 'src/models/redPerfil.model';

@Component({
  selector: 'app-edita-red-perfil',
  templateUrl: './edita-red-perfil.component.html',
  styleUrls: ['./edita-red-perfil.component.css']
})
export class EditaRedPerfilComponent implements OnInit {
 @Input() redes:RedPerfil[];

/*
Depende directamente del componente perfilContentComponent
*/

@Output() redEditada:EventEmitter<RedPerfil> = new EventEmitter<RedPerfil>();
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
    redSocial:[,[]],
    url:[null,[]]
  })
}



/*
Getters de los campos
*/
get RedSocial(){
  return this.form.get('redSocial');
}
get Url(){
  return this.form.get('url');
}

actualizaUrl(){
  const red = this.redes.find((r) => r.redSocial.id == parseInt(this.RedSocial?.value));
  this.form.controls['url'].setValue(red?.url);
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
  if(this.form.valid        
    ){     
    const redPerf:RedPerfil={
      redSocial:{id:parseInt(this.RedSocial?.value)},
      url: this.Url?.value}
    this.perfServ.editaRed(redPerf).subscribe((red)=>{
        this.redEditada.emit(red);
    })
    }
    }
}
