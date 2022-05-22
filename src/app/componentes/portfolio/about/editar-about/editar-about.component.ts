import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { About } from 'src/models/about.model';
import { Perfil } from 'src/models/perfil.model';


@Component({
  selector: 'app-editar-about',
  templateUrl: './editar-about.component.html',
  styleUrls: ['./editar-about.component.css']
})
export class EditarAboutComponent implements OnInit {
  @Input() valorInicial?:string;
  @Output() aboutEditado:EventEmitter<string>= new EventEmitter<string>();
  form:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private perfServ:PerfilService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      about:[this.valorInicial,[]]
    })
  }
  get About(){
    return this.form.get('about');
  }

  onSubmit(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const ab:About = {
        about:this.About?.value
      }
      this.perfServ.editaAbout(ab).subscribe(()=>{
        this.aboutEditado.emit(ab.about);
      })

    }
  }



}
