import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { PerfilComponent } from './componentes/portfolio/perfil/perfil.component';
import { PortfolioService } from './servicios/portfolio.service';
import { PerfilService } from './servicios/perfil.service';
import { HttpClientModule } from '@angular/common/http';
import { EstudiosProyectosComponent } from './componentes/portfolio/estudios-proyectos/estudios-proyectos.component';
import { ListadoEducacionComponent } from './componentes/portfolio/estudios-proyectos/listado-educacion/listado-educacion.component';
import { EducacionComponent } from './componentes/portfolio/estudios-proyectos/listado-educacion/educacion/educacion.component';
import { ListadoExperienciaComponent } from './componentes/portfolio/listado-experiencia/listado-experiencia.component';
import { ExperienciaComponent } from './componentes/portfolio/listado-experiencia/experiencia/experiencia.component';
import { EditPerfilComponent } from './componentes/portfolio/perfil/edit-perfil/edit-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PerfilContentComponent } from './componentes/portfolio/perfil/perfil-content/perfil-content.component';
import { AgregaEducacionComponent } from './componentes/portfolio/estudios-proyectos/listado-educacion/agrega-educacion/agrega-educacion.component';
import { EditaEducacionComponent } from './componentes/portfolio/estudios-proyectos/listado-educacion/edita-educacion/edita-educacion.component';
import { AgregaExperienciaComponent } from './componentes/portfolio/listado-experiencia/agrega-experiencia/agrega-experiencia.component';
import { EditaExperienciaComponent } from './componentes/portfolio/listado-experiencia/edita-experiencia/edita-experiencia.component';
import {DragDropModule} from '@angular/cdk/drag-drop';









@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LoginComponent,
    HeaderComponent,
    Pagina404Component,
    PerfilComponent,
    EstudiosProyectosComponent,
   ListadoEducacionComponent,
   EducacionComponent,
   ListadoExperienciaComponent,
   ExperienciaComponent,
   EditPerfilComponent,
   PerfilContentComponent,
   AgregaEducacionComponent,
   EditaEducacionComponent,
   AgregaExperienciaComponent,
   EditaExperienciaComponent
 

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    DragDropModule
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PortfolioService,PerfilService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
