import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion.model';
import { FormBuilder,FormGroup } from '@angular/forms';

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
  
  
  constructor(private formBuilder:FormBuilder) { 
    
    this.mesInicioActivado = true;
    this.mesFinActivado = true;
    this.anioFinActivado = true;
    this.formulario = this.formBuilder.group({
      institucion:['',[]],
      estudio:['',[]],
      mesInicio:[null,[]],
      anioInicio:['',[]],
      mesFin:[null,[]],
      anioFin:[null,[]],
      logoUrl:["",[]]
    })
    
  }
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
  private sacaNull(numero:number|null):number{
    return numero===null?0:numero;
  }

  resetMesInicio():void{
    this.formulario.reset({mesInicio:""})
  }
  resetMesFin():void{
    this.formulario.reset({mesFin:""})
  }
  resetAnioFin(){
    this.formulario.reset({anioFin:""})
  }

  cambiaMesInicioActivado():void{
    this.mesInicioActivado = !this.mesInicioActivado;
    if (!this.mesInicioActivado){
      this.resetMesInicio()
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
    
    const nuevaEdu:Educacion = {
      id:this.idDisp,
      estudio:this.Estudio?.value,
      institucion:this.Institucion?.value,
      desde:{
        mes:this.sacaNull(this.MesInicio?.value),
        anio:this.AnioInicio?.value
      },
      hasta:{
        mes:this.sacaNull(this.MesFin?.value),
        anio:this.sacaNull(this.AnioFin?.value)
      },  
      logoUrl:this.LogoUrl?.value   
    };
    console.log(nuevaEdu);
    console.log(this.idDisp)
    this.enviaEdu.emit(nuevaEdu);   
 
  }

  ngOnInit(): void {
  }

}
