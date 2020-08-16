import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as variables from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinancialAnalyticsService {

  subs = new Subscription();
  baseUrlMongo = variables.base_url_mongo;
  baseUrlOracle = variables.base_url_oracle;

  constructor(private http: HttpClient) { }

  getFinancials() {
    const endpointUrl = `${this.baseUrlMongo}/financial-analytics`;
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
