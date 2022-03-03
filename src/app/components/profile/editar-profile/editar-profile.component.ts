import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Profile } from 'src/app/interfacesYModelos/profile.model';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
@Component({
  selector: 'app-editar-profile',
  templateUrl: './editar-profile.component.html',
  styleUrls: ['./editar-profile.component.css']
})
export class EditarProfileComponent implements OnInit {
  @Input() perfilOriginal:Profile;
  
  @Output() cerrarEvent = new EventEmitter();
  @Output() editarEvent= new EventEmitter<Profile>();
  formulario:FormGroup;
  fechaActual:Fecha;
  diasMax:number;
  constructor(private formBuilder:FormBuilder) { 
    this.fechaActual = Fecha.FechaActual;
  }

  ngOnInit(): void {
   this.formulario = this.formBuilder.group({
     nombre:[this.perfilOriginal.nombre,[Validators.required]],
     apellido:[this.perfilOriginal.apellido,[Validators.required]],
     diaNac:[this.perfilOriginal.fechaNac.dia,[Validators.required,Validators.min(1)]],
     mesNac:[this.perfilOriginal.fechaNac.mes,[Validators.required,Validators.min(1),Validators.max(12)]],
     anioNac:[this.perfilOriginal.fechaNac.anio,[Validators.required,Validators.min(1900),Validators.max(this.fechaActual.getAnio())]],
     profesion:[this.perfilOriginal.profesion,[Validators.required]],
     localidad:[this.perfilOriginal.location,[Validators.required]],
     fotoPerfil:[this.perfilOriginal.profileUrl,[Validators.required, Validators.pattern('.+(.jpg|.png|.jpeg)$')]],
     fotoBanner:[this.perfilOriginal.bannerUrl,[Validators.required,Validators.pattern('.+(.jpg|.png|.jpeg)$')]]
   });
   this.diasMax = Fecha.cantidadDias(this.perfilOriginal.fechaNac.mes);
  }

  actualizoFechaActual(){
    this.fechaActual = Fecha.FechaActual;
  }
  //Getters de los campos del fromulario
  get Nombre(){
    return this.formulario.get('nombre');
  }
  get Apellido(){
    return this.formulario.get('apellido');
  }
  get diaNac(){
    return this.formulario.get('diaNac');
  }
  get mesNac(){
    return this.formulario.get('mesNac');
  }
  get anioNac(){
    return this.formulario.get('anioNac');
  }
  get Profesion(){
    return this.formulario.get('profesion');
  }
  get Localidad(){
    return this.formulario.get('localidad');
  }
  get FotoPerfil(){
    return this.formulario.get('fotoPerfil');
  }
  get FotoBanner(){
    return this.formulario.get('fotoBanner');
  }

  /*
    Validacion propia del formulario
  */

  //Validacion del mes
  mesValido():boolean{
    return Fecha.mesValido(parseInt(this.mesNac?.value),parseInt(this.anioNac?.value))
  }

  //Validaciones del dia
  diaValido():boolean{
    return Fecha.diaValido(parseInt(this.diaNac?.value),parseInt(this.mesNac?.value),parseInt(this.anioNac?.value));
  }
  respetaDiasMax():boolean{
    return parseInt(this.diaNac?.value)<=this.diasMax;
  }
  diaConsistente(){
    return this.diaValido() && this.respetaDiasMax();
  }

  fechaConsistente():boolean{
    return this.diaConsistente() && this.mesValido();
  }
  actualizaDiasMax(){
    this.diasMax = Fecha.cantidadDias(parseInt(this.mesNac?.value))
  }





  cerrarFormulario(){
    this.cerrarEvent.emit()
  }
  editarProfile(evento:Event){
    this.actualizoFechaActual()
    evento.preventDefault();
    if (this.formulario.valid && this.fechaConsistente()){
      const perfilNuevo:Profile = {
        nombre:this.Nombre?.value,
        apellido:this.Apellido?.value,
        fechaNac:{
          dia:parseInt(this.diaNac?.value),
          mes:parseInt(this.mesNac?.value),
          anio:parseInt(this.anioNac?.value)
        },
        profesion:this.Profesion?.value,
        location:this.Localidad?.value,
        bannerUrl:this.FotoBanner?.value,
        profileUrl:this.FotoPerfil?.value,
      };
      this.editarEvent.emit(perfilNuevo);
    }
    else{
      this.formulario.markAllAsTouched();
    }
  }
}
