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
  miPerfil:Profile
  fechaNac:Fecha
  constructor(private perfilServ:ProfileService) { }

  ngOnInit(): void {
   this.perfilServ.getProfile().subscribe((profile)=>{
      this.miPerfil = profile;
      this.fechaNac = new Fecha(profile.fechaNac.dia,profile.fechaNac.mes,profile.fechaNac.anio)
    });
  
  }

}
