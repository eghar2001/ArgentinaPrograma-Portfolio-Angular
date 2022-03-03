import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AboutComponent } from './components/about/about.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonsAndLoginComponent } from './components/header/buttons-and-login/buttons-and-login.component';
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import{HttpClientModule} from '@angular/common/http'

import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionComponent } from './components/educaciones/educacion/educacion.component';
import { ManejoEducacionComponent } from './components/educaciones/manejoEducacion/manejo-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditarAboutComponent } from './components/about/editar-about/editar-about.component';
import { EstudiosCertificacionesComponent } from './components/estudios-certificaciones/estudios-certificaciones.component';
import { EducacionService } from './servicios/educacion/educacion.service';
import { AboutService } from './servicios/about/about.service';
import { ProfileService } from './servicios/profile/profile.service';
import { EditarProfileComponent } from './components/profile/editar-profile/editar-profile.component';
import { ProfileContentComponent } from './components/profile/contenido/profile-content.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileContentComponent,
    AboutComponent,
    EducacionesComponent,
    ProjectsComponent,
    ButtonsAndLoginComponent,
    LoginFormComponent,
    EducacionComponent,
    ManejoEducacionComponent,
    EstudiosCertificacionesComponent,
    EditarAboutComponent,
    EditarProfileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EducacionService, AboutService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
