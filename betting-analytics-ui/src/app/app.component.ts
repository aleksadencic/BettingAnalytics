import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as segmentationActions from './segmentation/segmentation.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  subs = new Subscription();
  title = 'betting-analytics-ui';

  constructor(private store: Store<any>){
    this.subs.add(
      this.store.dispatch({
        type: segmentationActions.SET_IS_VALID,
        isValid: true
      })
    );
  }
}
