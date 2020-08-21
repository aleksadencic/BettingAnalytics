import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as financialsActions from './financial-analytics/financial-analytics.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subs = new Subscription();
  title = 'Betting Analytics';

  events: string[] = [];
  opened: boolean;
  isSidemenuOpen = false;

  sidenavItems = [];

  constructor(private store: Store<any>){
    this.sidenavItems = [
      {
        name: 'Financial Analytics',
        icon: 'bar_chart',
        route: 'financial-analytics'
      },
      {
        name: 'Segmentation',
        icon: 'supervisor_account',
        route: 'segmentation'
      },
      {
        name: 'Ticket Analytics',
        icon: 'insert_chart_outlined',
        route: ''
      },
      {
        name: 'User Preferences',
        icon: 'perm_identity',
        route: ''
      },
  ];
  }

  sidemenuButtonClick(): void{
    this.isSidemenuOpen = !this.isSidemenuOpen;
    this.store.dispatch({
      type: financialsActions.Actions.SET_IS_SIDEMENU_OPEN,
      isSidemenuOpen: this.isSidemenuOpen
    });
  }
}
