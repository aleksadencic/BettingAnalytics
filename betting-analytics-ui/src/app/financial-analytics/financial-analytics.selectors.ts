import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FinancialAnalyticsState } from './financial-analytics.state';

export const getFinancialsState = createFeatureSelector<FinancialAnalyticsState>(
    'financial-analytics'
);

export const getFinancialsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.data,
);

export const getProductsAnalyticsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.productsAnalyticsData,
);

export const getCountriesAnalyticsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.countriesAnalyticsData,
);

export const getSportBettingAnalyticsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.sportBettingAnalyticsData,
);

export const getPrAnalyticsData = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.prAnalyticsData,
);

export const getIsDataLaunching = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.isDataLaunching,
);

export const getIsSidemenuOpen = createSelector(
    getFinancialsState,
    (financials: FinancialAnalyticsState) => financials.isSidemenuOpen,
);
