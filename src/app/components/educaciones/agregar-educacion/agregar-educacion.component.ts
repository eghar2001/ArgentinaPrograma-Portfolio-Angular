import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/interfacesYModelos/educacion.model';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  @Output() enviaEdu = new EventEmitter<Educacion>();
  @Input() idDisp:number;
  formulario:FormGroup;
  mesInicioActivado:boolean|null;
  mesFinActivado:boolean;
  anioFinActivado:boolean;
  fechaActual:Fecha
  
  constructor(private formBuilder:FormBuilder) { 
    
    this.mesInicioActivado = true;
    this.mesFinActivado = true;
    this.anioFinActivado = true;
    this.fechaActual = Fecha.FechaActual
    this.formulario = this.formBuilder.group({
      institucion:['',[Validators.required]],
      estudio:['',[Validators.required]],
      mesInicio:[null,[Validators.min(1),Validators.max(12)]],
      anioInicio:[null,[Validators.required,Validators.min(1900),Validators.max(this.fechaActual.getAnio())]],
      mesFin:[null,[Validators.min(1),Validators.max(12)]],
      anioFin:[null,[]],
      logoUrl:[null,[Validators.required,Validators.pattern('.+(.jpg|.png|.jpeg)$')]]
    })
    
    
  }
  //getters de los campos del formulario
  get Institucion(){
    return this.formulario.get("institucion");
  }
  get Estudio(){
    return this.formulario.get("estudio");
  }
  get MesInicio(){
    return this.formulario.get("mesInicio");
  }
  get AnioInicio(){
    return this.formulario.get("anioInicio");
  }
  get MesFin(){
    return this.formulario.get("mesFin");
  }
  get AnioFin(){    
    return this.formulario.get("anioFin");
  }
  get LogoUrl(){
    return this.formulario.get("logoUrl")
  }
  
  
  //Funcion que retorna el valir o 0 si el mes es nulo
  private sacaNull(numero:string):number{
    
    return !numero?0:parseInt(numero);
  }


  //Funciones que sirven para resetear los valores
  resetMesInicio():void{
    this.formulario.reset({mesInicio:""})
  }
  resetMesFin():void{
    this.formulario.reset({mesFin:""})
  }
  resetAnioFin(){
    this.formulario.reset({anioFin:""})
  }


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
  
  



/*
  Funciones referentes a la activacion/desactivacion 
  de los campos de la fecha
*/
  cambiaMesInicioActivado():void{
    this.mesInicioActivado = !this.mesInicioActivado;
    if(!this.mesInicioActivado){
    this.resetMesInicio();    
    }
  }
  cambiaMesFinActivado():void{
    this.mesFinActivado = !this.mesFinActivado;
    if (!this.mesFinActivado){
      this.resetMesFin()
    }
  }
  activaHastaActualidad():void{
   this.anioFinActivado= !this.anioFinActivado;
   this.mesFinActivado = this.anioFinActivado? true:false;
   if (!this.anioFinActivado){
    this.resetAnioFin();
    this.resetMesFin();
  }
  }
  
  

 


  

 
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    if (this.formulario.valid && this.misValidacionesCorrectas()){     
    const nuevaEdu:Educacion = {
      id:this.idDisp,
      estudio:this.Estudio?.value,
      institucion:this.Institucion?.value,
      desde:{
        mes:this.sacaNull(this.MesInicio?.value),
        anio:parseInt(this.AnioInicio?.value)
      },
      hasta:{
        mes:this.sacaNull(this.MesFin?.value),
        anio:this.sacaNull(this.AnioFin?.value)
      },  
      logoUrl:this.LogoUrl?.value  
    }; 
  
    this.enviaEdu.emit(nuevaEdu);   
    }
    else{
      this.formulario.markAllAsTouched();
    }
    console.log(this.anioFinValido())
   
  }

  ngOnInit(): void {
  }

}
