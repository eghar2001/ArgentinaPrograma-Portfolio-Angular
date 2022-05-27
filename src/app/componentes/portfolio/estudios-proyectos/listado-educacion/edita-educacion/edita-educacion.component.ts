import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { FechaService } from 'src/app/servicios/fecha.service';
import { Educacion } from 'src/models/educacion.model';


@Component({
  selector: 'app-edita-educacion',
  templateUrl: './edita-educacion.component.html',
  styleUrls: ['./edita-educacion.component.css']
})
export class EditaEducacionComponent implements OnInit {
  
  
  /*
  Importamos la educacion original
  */
  @Input() eduOrig:Educacion;
  @Output() eduEditada:EventEmitter<Educacion> = new EventEmitter<Educacion>();

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
      descripcion:[this.eduOrig.descripcion,[]],
      fechaDesde:[this.eduOrig.fechaDesde,[]],
      fechaHasta:[this.eduOrig.fechaHasta,[]],
      institucion:[this.eduOrig.nombreInstitucion,[]],
      logoUrl:[this.eduOrig.fotoInstitucionUrl,[]]
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
    this.hastaActualidad = (this.eduOrig.fechaHasta == null);
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
        id:this.eduOrig.id, 
        descripcion: this.Descripcion?.value,
        fechaDesde:this.FechaDesde?.value,
        fechaHasta: this.hastaActualidad?null:this.FechaHasta?.value,
        nombreInstitucion: this.Institucion?.value,          
        fotoInstitucionUrl:this.LogoUrl?.value  
      }
      this.eduServ.editEducacion(edu).subscribe((educacion)=>{
       
        this.eduEditada.emit(educacion);
      }        
      );
 }
}
}
