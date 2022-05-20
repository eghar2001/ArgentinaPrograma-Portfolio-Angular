import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FechaService } from 'src/app/servicios/fecha.service';

import { Pais } from 'src/models/pais.model';
import { Perfil } from 'src/models/perfil.model';


import { PerfilService } from 'src/app/servicios/perfil.service';
import { SpinnerConfig } from 'src/app/spinner.config';
@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  
  @Input() perfilOrig:Perfil;
  @Output() formTerminado:EventEmitter<Perfil> = new EventEmitter<Perfil>();
  @Output() cerrarForm:EventEmitter<null> = new EventEmitter<null>();
  form:FormGroup;
 


  ngOnInit(): void {
    this.fechaServ.getFechaActual().subscribe((fechaAct)=> this.fechaActual =fechaAct)
    
    this.form = this.formBuilder.group({
      nombre:[this.perfilOrig.nombre,[]],
      apellido:[this.perfilOrig.apellido,[]],
      fechaNac:[this.perfilOrig.fechaNac,[]],
      profesion:[this.perfilOrig.profesion,[]],
      perfilUrl:[this.perfilOrig.perfilUrl,[]],
      bannerUrl:[this.perfilOrig.bannerUrl,[]],          
      localidad:[this.perfilOrig.localidad,[]],
      provincia:[this.perfilOrig.provincia]
    }) 
  }
  //VARIABLES BOOLEANAS

  /*
  Sirve para manejar el spinner
  */

  spinner:boolean;
  
 


  /*
  Propiedades del spinner
  */
  color= SpinnerConfig.getInstance().getColor();
  mode = SpinnerConfig.getInstance().getMode();
  diameter = SpinnerConfig.getInstance().getDiameter();;


  
  

  constructor(
    private perfServ:PerfilService,
    private fechaServ:FechaService,
    private formBuilder:FormBuilder,

    ) {

    this.spinner = false;

   
  }
  fechaActual:string;
  
  
  get Nombre(){
    return this.form.get('nombre');
  }
  get Apellido(){
    return this.form.get('apellido');
  }
  get FechaNac(){
    return this.form.get('fechaNac');
  }
  get Profesion(){
    return this.form.get('profesion');
  }
  get PerfilUrl(){
    return this.form.get('perfilUrl');
  }
  get BannerUrl(){
    return this.form.get('bannerUrl');
  }
  get Localidad(){
    return this.form.get('localidad');
  }
  get Provincia(){
    return this.form.get('provincia');
  }

    onCerrar(){
      this.cerrarForm.emit();
    }

    onEditar(event:Event){
      event.preventDefault();
      if(this.form.valid ){
        this.spinner = true;
        const perfil:Perfil ={
          id:this.perfilOrig.id,
          nombre: this.Nombre?.value,
          apellido:this.Apellido?.value,
          fechaNac: this.FechaNac?.value,         
          profesion:this.Profesion?.value,  
          perfilUrl:this.PerfilUrl?.value,
          bannerUrl:this.BannerUrl?.value,         
          localidad: this.Localidad?.value,
          provincia:this.Provincia?.value,
          redesSociales: this.perfilOrig.redesSociales          
        }
        this.perfServ.editProfile(perfil).subscribe((perf)=>{
          
          this.spinner = false;
          this.formTerminado.emit(perf);
        });
      }

    }
  
  



  }
 

  


