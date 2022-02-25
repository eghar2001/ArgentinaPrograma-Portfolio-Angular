import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfacesYModelos/profile.model';
import { ProfileService } from 'src/app/servicios/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  miPerfil:Profile
  constructor(private perfilServ:ProfileService) { }

  ngOnInit(): void {
   this.perfilServ.getProfile().subscribe((profile)=>{
      this.miPerfil = profile
    })
  }

}
