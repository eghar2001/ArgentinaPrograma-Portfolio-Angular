import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/interfaces/about.model';
import { AboutService } from 'src/app/servicios/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutServ:AboutService) { }
  miAbout:About
  ngOnInit(): void {
    this.aboutServ.getProfile().subscribe((about)=>{
      this.miAbout = about
    })
  }

}
