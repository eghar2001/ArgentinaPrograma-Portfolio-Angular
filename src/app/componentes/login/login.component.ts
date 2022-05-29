import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Login } from 'src/models/login.model';
import { ValidacionesAuth } from 'src/models/validacionesAuth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
          Validators.maxLength(valids.maxLengthUser),
          
        ]],
        password:[null,[Validators.required,
          Validators.maxLength(valids.maxLengthPass),
          Validators.pattern(valids.regexPass)
        ]]
      });
    })
    
  }

  get Username(){
    return this.form.get('username');
  }
  get Password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const credenciales:Login = {
        nombreUsuario:this.Username?.value,
        password:this.Password?.value
      }
      this.auth.login(credenciales).subscribe({
        next:(data)=>{
          alert('logueado correctamente');
          this.router.navigate(['/portfolio']);
        },
        error:(data)=>{
          alert('credenciales mal puestas');
        }
      })

    }else{
      this.form.markAllAsTouched;
    }
  }
  onGuest(){
    const credenciales:Login = {
      nombreUsuario:'guest',
      password:'guest'
    }
    this.auth.login(credenciales).subscribe(data => {
    })
  }
  

}
