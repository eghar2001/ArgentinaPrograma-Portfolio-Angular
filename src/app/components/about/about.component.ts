import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/interfacesYModelos/about.model';
import { AboutService } from 'src/app/servicios/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutServ:AboutService) { }
  miAbout:About;
  editarActivado:boolean;
  ngOnInit(): void {
    this.aboutServ.getAbout().subscribe((about)=>{
      this.miAbout = about;
    })
    this.editarActivado = false;

  }
  abrirEditar(){
    this.editarActivado = true;
  }
  cerrarEditar(){
    this.editarActivado = false;
  }
  editarAbout(valorFinal:string){
    const nuevoAbout:About = {
      content:valorFinal
    }
    this.aboutServ.editAbout(nuevoAbout).subscribe((nuevoAbout)=> this.miAbout = nuevoAbout);
    this.cerrarEditar();
  }

}
