import { createAction, props } from "@ngrx/store";

export const Actions  =  {
    SET_IS_DATA_LAUNCHING: 'Set Is Data Launching',
    SET_IS_DATA_LOADED: 'Set Is Data Loaded',
    SET_FINANCIALS_DATA: 'Set Financials Data',
    SET_PRODUCTS_ANALYTICS_DATA: 'Set Products Analytics Data',
    SET_COUNTRIES_ANALYTICS_DATA: 'Set Countries Analytics Data',
};

export const setIsDataLaunching = createAction(
    Actions.SET_IS_DATA_LAUNCHING,
    props<{ isDataLaunching }>()
);

export const setIsDataLoaded = createAction(
    Actions.SET_IS_DATA_LOADED,
    props<{ isDataLoaded }>()
);

export const setFinancialsData = createAction(
    Actions.SET_FINANCIALS_DATA,
    props<{ data }>()
);

export const setProductsAnalyticsData = createAction(
    Actions.SET_PRODUCTS_ANALYTICS_DATA,
    props<{ data }>()
);

export const setCountriesAnalyticsData = createAction(
    Actions.SET_COUNTRIES_ANALYTICS_DATA,
    props<{ data }>()
);
