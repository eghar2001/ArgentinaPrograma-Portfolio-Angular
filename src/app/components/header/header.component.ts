import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginActivado:boolean;
  constructor() {
    this.loginActivado =false;
   }

  ngOnInit(): void {
    
  }
  cambiaLogin(){
    this.loginActivado = true
  }

}
