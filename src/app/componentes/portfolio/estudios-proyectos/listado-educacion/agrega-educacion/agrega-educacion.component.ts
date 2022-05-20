
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { FechaService } from 'src/app/servicios/fecha.service';
import { Educacion } from 'src/models/educacion.model';


@Component({
  selector: 'app-agrega-educacion',
  templateUrl: './agrega-educacion.component.html',
  styleUrls: ['./agrega-educacion.component.css']
})
export class AgregaEducacionComponent implements OnInit {
  @Input() idTipoEdu:number;

  @Output() eduGuardada:EventEmitter<Educacion> = new EventEmitter<Educacion>();

  form:FormGroup;
  fechaActual:string;
  hastaActualidad:boolean;

  constructor(private fechaServ:FechaService,
    private formBuilder:FormBuilder,
    private eduServ:EducacionService
    ) { }

  ngOnInit(): void {
    /*
    Inicializo formulario
    */
    this.form = this.formBuilder.group({
      descripcion:[null,[]],
      fechaDesde:[null,[]],
      fechaHasta:[null,[]],
      institucion:[null,[]],
      logoUrl:[null,[]]
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
  }

  /*
  Getters de los campos
  */
  get Descripcion(){
    return this.form.get('descripcion');
  }
  get FechaDesde(){
    return this.form.get('fechaDesde');
  }
  get FechaHasta(){
    return this.form.get('fechaHasta');
  }
  get Institucion(){
    return this.form.get('institucion');
  }
  get LogoUrl(){
    return this.form.get('logoUrl');
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
  Funcion para enviar el estudio
  */
 onEnviar(event:Event){
    event.preventDefault();
 
    if(this.form.valid ){
      
      const edu:Educacion ={
        idPerfil:1,
        descripcion: this.Descripcion?.value,
        fechaDesde:this.FechaDesde?.value,
        fechaHasta: this.hastaActualidad?null:this.FechaHasta?.value,
        nombreInstitucion: this.Institucion?.value,
        idTipoEdu:this.idTipoEdu,    
        fotoInstitucionUrl:this.LogoUrl?.value  
      }
      this.eduServ.createEducacion(edu).subscribe((educacion)=>{
       
        this.eduGuardada.emit(educacion);
      }        
      );
 }
}
}
