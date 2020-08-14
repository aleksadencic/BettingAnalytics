import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as segmentationActions from './segmentation/segmentation.actions';

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

  sidenavItems = [
      {
        name: 'Financial Analytics',
        icon: 'analytics',
        component: ''
      },
      {
        name: 'Segmentation',
        icon: 'supervisor_account',
        component: ''
      },
      {
        name: 'Ticket Analytics',
        icon: 'assessment',
        component: ''
      },
      {
        name: 'User Preferences',
        icon: 'account_box',
        component: ''
      },
  ];

  constructor(private store: Store<any>){
    // this.subs.add(
    //   this.store.dispatch({
    //     type: segmentationActions.SET_IS_VALID,
    //     isValid: true
    //   })
    // );
  }
}
