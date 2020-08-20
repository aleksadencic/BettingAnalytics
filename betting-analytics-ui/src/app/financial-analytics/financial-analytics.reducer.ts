import { createReducer, on } from '@ngrx/store';
import { initialFinancialAnalyticsState } from './financial-analytics.state';
import * as financialAnalyticsActions from './financial-analytics.actions';

export const financialAnalyticsReducer = createReducer(
    initialFinancialAnalyticsState,
    on(financialAnalyticsActions.setIsDataLaunching, (state, { isDataLaunching }) => {
        return ({ ...state, isDataLaunching: isDataLaunching });
    }),
    on(financialAnalyticsActions.setFinancialsData, (state, { data }) => {
        return ({ ...state, data: data });
    }),
);