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

  getFinancials(body) {
    const endpointUrl = `${this.baseUrlMongo}/financial-analytics/find`;
    return this.http.post(endpointUrl, body).pipe(
      map(
        results => {
          return results;
        },
        error => console.log(error),
      ),
    );
  }

  getProductsAnalytics(countries){
    const endpointUrl = `${this.baseUrlMongo}/financial-analytics/products`;
    return this.http.post(endpointUrl, countries).pipe(
      map(
        results => {
          return results;
        },
        error => console.log(error),
      ),
    );
  }


}
