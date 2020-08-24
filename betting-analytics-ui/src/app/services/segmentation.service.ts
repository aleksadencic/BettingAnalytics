import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as variables from '../../environments/environment';
import { map } from 'rxjs/operators';
// import { oboe } from 'oboe';
import oboe from '../../assets/scripts/oboe-browser.min.js';
import { Store } from '@ngrx/store';
import * as segmentationActions from '../segmentation/segmentation.actions';


@Injectable({
  providedIn: 'root'
})
export class SegmentationService {

  subs = new Subscription();
  baseUrlMongo = variables.base_url_mongo;
  baseUrlOracle = variables.base_url_oracle;

  constructor(private http: HttpClient,
              private store: Store<any>) { }

  getSegmentationData(bodyParams): any {
    const endpointUrl = `${this.baseUrlMongo}/segmentation`;
    oboe({
      url: `${this.baseUrlMongo}/segmentation`,
      body: bodyParams,
      method: 'POST',
      headers: {
        'Content-Type': undefined,
        'X-Requested-Width': undefined,
        'Content-Length': undefined
      }
    })
    .done(data => {
      this.store.dispatch({
        type: segmentationActions.Actions.SET_IS_DATA_LOADED,
        isDataLoaded: true
      });
      this.store.dispatch({
        type: segmentationActions.Actions.SET_IS_DATA_LOADING,
        isDataLaunching: false
      });
      this.store.dispatch({
        type: segmentationActions.Actions.SET_MEMBERS_DATA,
        members: data
      });
    })
    .fail(error => {
      console.log(`ERROR:  ${error}`);
    });
    // return this.http.post(endpointUrl, body).pipe(
    //   map(
    //     results => {
    //       console.log(results);
    //       return results;
    //     },
    //     error => console.log(error),
    //   ),
    // );
  }
}
