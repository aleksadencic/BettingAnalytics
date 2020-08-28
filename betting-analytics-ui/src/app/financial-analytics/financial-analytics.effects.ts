import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as FinancialsActions from './financial-analytics.actions';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class FinancialAnalyticsEffect {
    constructor(
        private actions$: Actions,
        private financialsService: FinancialAnalyticsService
    ){}

    // addMember$: Observable<Action> = createEffect(() => {

    // })

    // getFinancials$: Observable<Action> = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(FinancialsActions.setFinancialsData),
    //     switchMap(() => {
    //       return this.financialsService.getFinancials().pipe(
    //         map(results => FinancialsActions.setFinancialsData({ data: results })),
    //         catchError(error => of(FinancialsActions.setFinancialsDataError(error)))
    //       );
    //     }),
    //   ),
    // );
}
