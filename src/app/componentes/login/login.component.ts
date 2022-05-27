import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Login } from 'src/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private auth:AutenticacionService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[,[]],
      password:[,[]]
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
      this.auth.login(credenciales).subscribe(data =>{
        this.router.navigate(['/portfolio']);
      });

    }
  }
  onGuest(){
    const credenciales:Login = {
      nombreUsuario:'guest',
      password:'guest'
    }
    this.auth.login(credenciales).subscribe(data => {
      this.router.navigate(['/portfolio'])
    })
  }

}
