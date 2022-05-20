import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './componentes/portfolio/proyectos/proyectos.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'',redirectTo:'/portfolio',pathMatch:'full'},
  {path:'**',component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
