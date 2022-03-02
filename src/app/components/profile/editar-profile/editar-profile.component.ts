import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-profile',
  templateUrl: './editar-profile.component.html',
  styleUrls: ['./editar-profile.component.css']
})
export class EditarProfileComponent implements OnInit {
  formulario:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      
    })
  }

}
