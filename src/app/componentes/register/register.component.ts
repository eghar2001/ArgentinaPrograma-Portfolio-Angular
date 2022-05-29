import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { NuevoUsuario } from 'src/models/nuevoUsuario.model';
import { ValidacionesAuth } from 'src/models/validacionesAuth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  validaciones:ValidacionesAuth;
  constructor(
    private formBuilder:FormBuilder,
    private auth:AutenticacionService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.auth.getValidaciones().subscribe((valids:ValidacionesAuth)=>{
      this.validaciones = valids;
      this.form = this.formBuilder.group({
        username:[null,[Validators.required,
        Validators.pattern(valids.regexUser),
        Validators.maxLength(valids.maxLengthUser)
        ]],
        email:[null,[Validators.required,
          Validators.maxLength(valids.maxLengthEmail),
          Validators.pattern(valids.regexEmail)
        ]],
        password:[null,[Validators.required,
          Validators.maxLength(valids.maxLengthPass),
          Validators.pattern(valids.regexPass)]
        ]
      })
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
      this.auth.register(nuevoUser).subscribe({
        next:()=>{
          alert("Usuario "+nuevoUser.nombreUsuario +" registrado!");
        },
        error:(mensaje:string)=>{
          alert(mensaje);
        }
      })
    }
    else{
     this.form.markAllAsTouched;
    }
  }

}
