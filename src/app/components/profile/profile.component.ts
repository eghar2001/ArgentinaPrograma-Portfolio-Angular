import { Component, OnInit } from '@angular/core';
import { Fecha } from 'src/app/interfacesYModelos/fecha.model';
import { Profile } from 'src/app/interfacesYModelos/profile.model';
import { ProfileService } from 'src/app/servicios/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  miPerfil:Profile;
  fechaNac:Fecha;
  edad:number;
  formActivado:boolean;
  constructor(private perfilServ:ProfileService) { 
    this.perfilServ.getProfile().subscribe((profile)=>{
      this.miPerfil = profile;
      this.fechaNac = new Fecha(profile.fechaNac.dia,profile.fechaNac.mes,profile.fechaNac.anio);
      this.edad = this.fechaNac.calculaEdad();
    });
    this.formActivado=false;  
  }
  abrirFormulario(){
    this.formActivado = true;
  }
  cerrarFormulario(){
    this.formActivado = false;
  }
  editarPerfil(perfilEditado:Profile){
    this.perfilServ.editProfile(perfilEditado).subscribe((perfil)=>{
      const fechaNac = new Fecha(perfil.fechaNac.dia,perfil.fechaNac.mes,perfil.fechaNac.anio);
      this.miPerfil = perfil;
      this.edad = fechaNac.calculaEdad();
      
    }
    )
    this.cerrarFormulario();
  }

  ngOnInit(): void {
  }

}
