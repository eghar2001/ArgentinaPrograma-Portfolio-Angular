import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUser:boolean = this.auth.IsUser;
  constructor(
    private auth:AutenticacionService
  ) { }

  ngOnInit(): void {
  }

}
