import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Pagina404Component } from './componentes/errorMsjs/pagina404/pagina404.component';
import { PerfilComponent } from './componentes/portfolio/perfil/perfil.component';
import { PortfolioService } from './servicios/portfolio.service';
import { PerfilService } from './servicios/perfil.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EducacionesPorTipoComponent } from './componentes/portfolio/estudios-proyectos/educaciones-por-tipo';
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
import { SkillsPorTipoComponent } from './componentes/portfolio/skills-por-tipo/skills-por-tipo.component';
import { ListadoSkillsComponent } from './componentes/portfolio/skills-por-tipo/listado-skills/listado-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillComponent } from './componentes/portfolio/skills-por-tipo/listado-skills/skill/skill.component';
import { AgregaSkillComponent } from './componentes/portfolio/skills-por-tipo/listado-skills/agrega-skill/agrega-skill.component';
import { EditaSkillComponent } from './componentes/portfolio/skills-por-tipo/listado-skills/edita-skill/edita-skill.component';
import { ProyectosComponent } from './componentes/portfolio/proyectos/proyectos.component';
import { AgregaProyectoComponent } from './componentes/portfolio/proyectos/agrega-proyecto/agrega-proyecto.component';
import { EditaProyectoComponent } from './componentes/portfolio/proyectos/edita-proyecto/edita-proyecto.component';
import { AgregaRedPerfilComponent } from './componentes/portfolio/perfil/agrega-red-perfil/agrega-red-perfil.component';
import { BorraRedPerfilComponent } from './componentes/portfolio/perfil/borra-red-perfil/borra-red-perfil.component';
import { AboutComponent } from './componentes/portfolio/about/about.component';

import { EditaRedPerfilComponent } from './componentes/portfolio/perfil/edita-red-perfil/edita-red-perfil.component';
import { EditarAboutComponent } from './componentes/portfolio/about/editar-about/editar-about.component';
import { RegisterComponent } from './componentes/register/register.component';
import { InterceptorService } from './servicios/interceptor.service';
import { RedesNoDisponiblesComponent } from './componentes/errorMsjs/redes-no-disponibles/redes-no-disponibles.component';








@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LoginComponent,
    HeaderComponent,
    Pagina404Component,
    PerfilComponent,
    EducacionesPorTipoComponent,
   ListadoEducacionComponent,
   EducacionComponent,
   ListadoExperienciaComponent,
   ExperienciaComponent,
   EditPerfilComponent,
   PerfilContentComponent,
   AgregaEducacionComponent,
   EditaEducacionComponent,
   AgregaExperienciaComponent,
   EditaExperienciaComponent,
   SkillsPorTipoComponent,
   ListadoSkillsComponent,
   SkillComponent,
   AgregaSkillComponent,
   EditaSkillComponent,
   ProyectosComponent,
   AgregaProyectoComponent,
    EditaProyectoComponent,
    AgregaRedPerfilComponent,
    BorraRedPerfilComponent,
    AboutComponent,
    EditaRedPerfilComponent,
    EditarAboutComponent,
    RegisterComponent,
    RedesNoDisponiblesComponent
 

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    DragDropModule,
    
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": -50,
      "radius": 97,
      "space": -1,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 4,
      
      "titleFontSize": "10",
      "subtitleFontSize": "20",
      "animateTitle": false,
      "animationDuration": 500,
      "showTitle": false,
      "showUnits": false,      
      "clockwise": false,
      "lazy": true}),
  
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PortfolioService,PerfilService,
  {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
