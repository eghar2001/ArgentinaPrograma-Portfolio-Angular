import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { RedService } from 'src/app/servicios/redes.service';
import { RedPerfil } from 'src/models/redPerfil.model';
import { RedSocial } from 'src/models/redSocial.model';

@Component({
  selector: 'app-agrega-red-perfil',
  templateUrl: './agrega-red-perfil.component.html',
  styleUrls: ['./agrega-red-perfil.component.css']
})
export class AgregaRedPerfilComponent implements OnInit {
 
/*
Depende directamente del componente perfilContentComponent
*/

  @Output() redAgregada:EventEmitter<RedPerfil> = new EventEmitter<RedPerfil>();
  @Output() cerrarForm:EventEmitter<null> = new EventEmitter<null>();
  /*
  Array de redes que se muestra en el form
  */
  redes:RedSocial[];
  form:FormGroup;

  constructor(
    private redServ:RedService,
    private formBuilder:FormBuilder,
    private perfServ:PerfilService
  ) { }

  ngOnInit(): void {
    this.redServ.getRedesFaltantes().subscribe((redesSociales)=>{
      this.redes =redesSociales;
      if(redesSociales.length ===0){
        setTimeout(()=>{this.cerrarForm.emit()},2000)
      }
      
      }
    )
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
      this.perfServ.agregaRed(redPerf).subscribe((red)=>{
          this.redAgregada.emit(red);
      })
      }
      }
  }


