import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/interfacesYModelos/experiencia.model';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';
@Component({
  selector: 'app-manejo-experiencia',
  templateUrl: './manejo-experiencia.component.html',
  styleUrls: ['./manejo-experiencia.component.css']
})
export class ManejoExperienciaComponent implements OnInit {
  @Input() idDisp:number;
  @Input() experienciaOriginal:Experiencia;
  @Input() editar:boolean;
  @Output() agregarEvent = new EventEmitter<Experiencia>();
  @Output() editarEvent = new EventEmitter<Experiencia>();
  formulario:FormGroup;
  fechaActual:Fecha;
  mesInicioActivado:boolean;
  mesFinActivado:boolean;
  anioFinActivado:boolean;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.mesInicioActivado = true;
    this.mesFinActivado = true;
    this.anioFinActivado = true;
    this.fechaActual = Fecha.FechaActual;
    this.formulario = this.formBuilder.group({
      cargo:[this.editar?this.experienciaOriginal.cargo:'',[Validators.required]],
      institucion:[this.editar?this.experienciaOriginal.institucion:'',[Validators.required]],
      tipoJornada:[this.editar?this.experienciaOriginal.tipoJornada:'',[Validators.required]],
      mesInicio:[this.editar && !(this.experienciaOriginal.desde.mes==0)?this.experienciaOriginal.desde.mes:null,[Validators.min(1),Validators.max(12)]],
      anioInicio:[this.editar?this.experienciaOriginal.desde.anio:null,[Validators.required,Validators.min(1900),Validators.max(this.fechaActual.getAnio())]],
      mesFin:[this.editar  && !(this.experienciaOriginal.hasta.mes === 0 || this.experienciaOriginal.hasta.anio === 0 )?this.experienciaOriginal.hasta.mes:null,[Validators.min(1),Validators.max(12)]],
      anioFin:[this.editar && !(this.experienciaOriginal.hasta.anio === 0)?this.experienciaOriginal.hasta.anio:null,[Validators.min(1900)]],
      fondoUrl:[this.editar?this.experienciaOriginal.fondoUrl:null,[Validators.required,Validators.pattern('.+(.jpg|.png|.jpeg|.gif)$')]]
    });
    this.mesInicioActivado = this.editar &&  this.experienciaOriginal.desde.mes === 0? false:true;
    this.mesFinActivado = this.editar && (this.experienciaOriginal.hasta.mes === 0 || this.experienciaOriginal.hasta.anio === 0)? false:true;
    this.anioFinActivado = this.editar && this.experienciaOriginal.hasta.anio === 0? false:true;
  };
  get Cargo(){
    return this.formulario.get("cargo");
  };
  get Institucion(){
    return this.formulario.get("institucion");
  };
  get TipoJornada(){
    return this.formulario.get("tipoJornada");
  };
  get MesInicio(){
    return this.formulario.get("mesInicio");
  };
  get AnioInicio(){
    return this.formulario.get("anioInicio");
  };
  get MesFin(){
    return this.formulario.get("mesFin");
  };
  get AnioFin(){
    return this.formulario.get("anioFin");
  };
  get FondoUrl(){
    return this.formulario.get("fondoUrl");
  };
  resetMesInicio():void{
    this.formulario.controls['mesInicio'].setValue(null)
  }
  resetMesFin():void{
    this.formulario.controls['mesFin'].setValue(null)
  }
  resetAnioFin(){
    this.formulario.controls['anioFin'].setValue(null)
  }
   //Funcion que retorna el valir o 0 si el mes es nulo
   private sacaNull(numero:string):number{
    
    return !numero?0:parseInt(numero);
  }
  
  cambiaMesInicioActivado():void{
    this.mesInicioActivado = !this.mesInicioActivado;
    if(!this.mesInicioActivado){
    this.resetMesInicio();    
    }
  };
  cambiaMesFinActivado():void{
    this.mesFinActivado = !this.mesFinActivado;
    if (!this.mesFinActivado){
      this.resetMesFin()
    }
  };
  activaHastaActualidad():void{
   this.anioFinActivado= !this.anioFinActivado;
   this.mesFinActivado = this.anioFinActivado? true:false;
   if (!this.anioFinActivado){
    this.resetAnioFin();
    this.resetMesFin();
  }
  };

  /*
    Funciones para evitar que hayan incoherencias en las fechas
  */
 //Chequea que el año del fin sea mayor o igual que el año de inicio, caso contrario, habria una inconsistencia ya que se termina un estudio antes de arrancarlo
 anioFinValido(){
  if(this.anioFinActivado){
    return this.sacaNull(this.AnioFin?.value) >= parseInt(this.AnioInicio?.value)
  }
  else{
    return true;
  }
};

anioInicioActual(){
  return parseInt(this.AnioInicio?.value)===this.fechaActual.getAnio();
}

//Chequea que un mes ingresado como mesInicio sea menor o igual al mes actual
//En caso que el año ingresado como anioInicio sea igual al actual
mesInicioValido():boolean{
  if (this.anioInicioActual()){
    return (this.sacaNull(this.MesInicio?.value)<= this.fechaActual.getMes() )
  }
  else{
    return true;
  }
}

//Chequea que el mes ingresado en mesFin sea mayor o igual al mes actual 
//en caso que el año fin ingresado sea igual al añoinicio

mesFinValido():boolean{
  if(this.AnioInicio?.value == this.AnioFin?.value){
    return (this.sacaNull(this.MesFin?.value)>= this.sacaNull(this.MesInicio?.value))
  }
  else{
    return true;
  }
}

//funcion que recoge todas las validaciones
misValidacionesCorrectas():boolean{
  return this.mesFinValido() && this.mesInicioValido() && this.anioFinValido();
}


  clickAgregar(evento:Event){
    evento.preventDefault();
    if (this.formulario.valid && this.misValidacionesCorrectas()){
      const exp:Experiencia = {
        id:this.idDisp,
        institucion:this.Institucion?.value,
        tipoJornada:this.TipoJornada?.value,
        cargo:this.Cargo?.value,
        desde:{
            mes:this.sacaNull(this.MesInicio?.value),
            anio:this.sacaNull(this.AnioInicio?.value)
        },
        hasta:{
            mes:this.sacaNull(this.MesFin?.value),
            anio:this.sacaNull(this.AnioFin?.value)
        },
        fondoUrl:this.FondoUrl?.value
      };
      this.agregarEvent.emit(exp);
      
    }
    else{
      this.formulario.markAllAsTouched();
    }
  }
  clickEditar(evento:Event){
    evento.preventDefault();
    if (this.formulario.valid && this.misValidacionesCorrectas()){
      const exp:Experiencia = {
        id:this.experienciaOriginal.id,
        institucion:this.Institucion?.value,
        tipoJornada:this.TipoJornada?.value,
        cargo:this.Cargo?.value,
        desde:{
            mes:this.sacaNull(this.MesInicio?.value),
            anio:this.sacaNull(this.AnioInicio?.value)
        },
        hasta:{
            mes:this.sacaNull(this.MesFin?.value),
            anio:this.sacaNull(this.AnioFin?.value)
        },
        fondoUrl:this.FondoUrl?.value
      };
      this.editarEvent.emit(exp);
      
    }
    else{
      this.formulario.markAllAsTouched();
    }
  }
}
