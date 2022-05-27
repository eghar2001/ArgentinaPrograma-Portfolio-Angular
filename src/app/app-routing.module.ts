import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { RegisterComponent } from './componentes/register/register.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'portfolio',component:PortfolioComponent,canActivate:[GuardGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
