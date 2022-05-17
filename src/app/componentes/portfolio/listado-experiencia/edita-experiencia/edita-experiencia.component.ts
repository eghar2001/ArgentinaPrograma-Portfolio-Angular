import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { FechaService } from 'src/app/servicios/fecha.service';
import { Experiencia } from 'src/models/experiencia.model';
import { TipoJornada } from 'src/models/tipoJornada.model';

@Component({
  selector: 'app-edita-experiencia',
  templateUrl: './edita-experiencia.component.html',
  styleUrls: ['./edita-experiencia.component.css']
})
export class EditaExperienciaComponent implements OnInit {

  @Input() expOrig:Experiencia;
  @Output() expEditada:EventEmitter<Experiencia> = new EventEmitter<Experiencia>();
  

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
    private expServ:ExperienciaService
 
    ) { }

  ngOnInit(): void {
    /*
    Inicializo formulario
    */
    this.form = this.formBuilder.group({
      nombreInstitucion:[this.expOrig.nombreInstitucion,[]],
      tipoJornada:[this.expOrig.tipoJornada.id,[]],
      fechaDesde:[this.expOrig.fechaDesde,[]],
      fechaHasta:[this.expOrig.fechaHasta,[]],      
      cargo:[this.expOrig.cargo,[]], 
      fondoUrl:[this.expOrig.fondoUrl,[]], 
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
    this.hastaActualidad = !this.expOrig.fechaHasta;

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
        id:this.expOrig.id,
        idPerfil:this.expOrig.idPerfil,
        nombreInstitucion: this.NombreInstitucion?.value,
        tipoJornada: {id: parseInt( this.TipoJornada?.value)},
        fechaDesde:this.FechaDesde?.value,
        fechaHasta: this.FechaHasta?.value,
        cargo:this.Cargo?.value,
        fondoUrl: this.FondoUrl?.value
      }
     
      this.expServ.editExperiencia(exp).subscribe((experiencia)=>{
        this.expEditada.emit(experiencia);
        
      }        
      );
 }
}
}
