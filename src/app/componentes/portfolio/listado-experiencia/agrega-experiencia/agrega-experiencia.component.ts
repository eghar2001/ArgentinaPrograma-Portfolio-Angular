import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FechaService } from 'src/app/servicios/fecha.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { Experiencia } from 'src/models/experiencia.model';
import { TipoJornada } from 'src/models/tipoJornada.model';

@Component({
  selector: 'app-agrega-experiencia',
  templateUrl: './agrega-experiencia.component.html',
  styleUrls: ['./agrega-experiencia.component.css']
})
export class AgregaExperienciaComponent implements OnInit {

  @Output() expAgregada:EventEmitter<Experiencia> = new EventEmitter<Experiencia>();
  

  form:FormGroup;
  fechaActual:string;
  hastaActualidad:boolean;
  tiposJornada:TipoJornada[];
  /*
  Pedimos fecha desde para que sirva como validador de la fechaHasta
  */

  constructor(
    private fechaServ:FechaService,
    private formBuilder:FormBuilder,
    private expServ:ExperienciaService,
    private perfServ:PerfilService
 
    ) { }

  ngOnInit(): void {
    /*
    Inicializo formulario
    */
    this.form = this.formBuilder.group({
      nombreInstitucion:[null,[]],
      tipoJornada:[null,[]],
      fechaDesde:[null,[]],
      fechaHasta:[null,[]],      
      cargo:[null,[]], 
      fondoUrl:[null,[]], 
    })
    
    /*
    Recibo fecha actual para poder realizar las validaciones
    */
    this.fechaServ.getFechaActual().subscribe(fecha=>{
      this.fechaActual = fecha;
    })
    /*
    Valores de inicio de las variables
    */
    this.hastaActualidad = false;

    /*
    Inicializo tiposJornada
    */
    this.expServ.getTipoJornadas().subscribe((tiposJorn)=> 
    {this.tiposJornada = tiposJorn
  
    }

      );
    
  }
/*
  Getters de los campos
  */
  get NombreInstitucion(){
    return this.form.get('nombreInstitucion');
  }
  get TipoJornada(){
    return this.form.get('tipoJornada');
  }
  get FechaDesde(){
    return this.form.get('fechaDesde');
  }
  get FechaHasta(){
    return this.form.get('fechaHasta');
  }
  get Cargo(){
    return this.form.get('cargo')
  }  
  get FondoUrl(){
    return this.form.get('fondoUrl');
  }

  

  /*
  Toggler del campo fechActual
  */
  onHastaActualidad(){
    this.hastaActualidad = !this.hastaActualidad;
    this.resetFechaHasta();
  }

  /*
  Metodo para resetear el valor de fechaHasta
  */
  resetFechaHasta():void{
    this.form.controls['fechaHasta'].setValue(null)
  }


  /*
  Funcion para enviar la experiencia
  */
 
 onEnviar(event:Event){
    event.preventDefault();
 
    if(this.form.valid ){
      
      const exp:Experiencia ={
        idPerfil:this.perfServ.idPerfActual,
        nombreInstitucion: this.NombreInstitucion?.value,
        tipoJornada: {id: parseInt(( this.TipoJornada?.value))},
        fechaDesde:this.FechaDesde?.value,
        fechaHasta: this.FechaHasta?.value,
        cargo:this.Cargo?.value,
        fondoUrl: this.FondoUrl?.value
      }
      this.expServ.createExperiencia(exp).subscribe((experiencia)=>{
          this.expAgregada.emit(experiencia);
        
      }        
      );
 }
}
}
