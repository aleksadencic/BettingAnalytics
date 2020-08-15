import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

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

  sidenavItems = [];

  constructor(private store: Store<any>){
    // this.subs.add(
    //   this.store.dispatch({
    //     type: segmentationActions.SET_IS_VALID,
    //     isValid: true
    //   })
    // );

    this.sidenavItems = [
      {
        name: 'Financial Analytics',
        icon: 'analytics',
        route: 'financial-analytics'
      },
      {
        name: 'Segmentation',
        icon: 'supervisor_account',
        route: 'segmentation'
      },
      {
        name: 'Ticket Analytics',
        icon: 'assessment',
        route: ''
      },
      {
        name: 'User Preferences',
        icon: 'account_box',
        route: ''
      },
  ];
  }
}
