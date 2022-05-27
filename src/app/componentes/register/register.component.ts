import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { NuevoUsuario } from 'src/models/nuevoUsuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private auth:AutenticacionService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[,Validators.minLength(3)],
      email:[],
      password:[]
    })
  }

  get Username(){
    return this.form.get('username');
  }
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const nuevoUser:NuevoUsuario={
        nombreUsuario:this.Username?.value,
        email:this.Email?.value,
        password:this.Password?.value
      }
      this.auth.register(nuevoUser).subscribe((msj) => {
        alert(msj.mensaje);
        this.router.navigate(['/login']);
      },err =>{
        alert(err.mensaje)
      })
    }
    else{
     
    }
  }

}
