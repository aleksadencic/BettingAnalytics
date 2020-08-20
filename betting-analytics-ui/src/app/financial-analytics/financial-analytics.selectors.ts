import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FinancialAnalyticsState } from './financial-analytics.state';

export const getFinancialsState = createFeatureSelector<FinancialAnalyticsState>(
    'financial-analytics'
); 

export const getFinancialsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.data,
);