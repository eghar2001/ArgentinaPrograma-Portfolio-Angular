import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerAnim } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    routerAnim
  ]
})
export class AppComponent {
  title = 'miPortfolio2';
  constructor(
    private contexts: ChildrenOutletContexts
  ){

  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
