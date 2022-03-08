import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  ancho:number;
  constructor() { 
    this.ancho = window.innerWidth;
  }
  actualizaAncho():void{
    this.ancho = window.innerHeight;
  }
}
