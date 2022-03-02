import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  @Input() valorInicial:string;
  @Output() editarEvent = new EventEmitter<string>();
  formulario:FormGroup
  constructor(private formBuilder:FormBuilder) {
    
   }
  
    
  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      contenidoAbout:[this.valorInicial]
    })
  }
  get ContenidoAbout(){
    return this.formulario.get("contenidoAbout")
  }
  editarAbout(){
    this.editarEvent.emit(this.ContenidoAbout?.value)
  }
 
}
