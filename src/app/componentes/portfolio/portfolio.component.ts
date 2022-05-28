import { Component, OnInit } from '@angular/core';


import { PortfolioService } from 'src/app/servicios/portfolio.service';



import { Portfolio } from 'src/models/portfolio.model';
import { PerfilComponent } from './perfil/perfil.component';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
 
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio;

  constructor(private portServ:PortfolioService) { 
    
    
  }
  
 
  ngOnInit(): void {
  
     this.portServ.getPortfolio().subscribe((portf)=>{
       this.portfolio = portf;
         
      
     });
    
 
  }

}
