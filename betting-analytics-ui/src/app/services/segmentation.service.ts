import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as variables from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SegmentationService {

  subs = new Subscription();
  baseUrlMongo = variables.base_url_mongo;
  baseUrlOracle = variables.base_url_oracle;

  constructor(private http: HttpClient) { }

  getSegmentationData() {
    const endpointUrl = `${this.baseUrlMongo}/segmentation`;
    return this.http.get(endpointUrl).pipe(
      map(
        results => {
          return results;
        },
        error => console.log(error),
      ),
    );
  }
}
