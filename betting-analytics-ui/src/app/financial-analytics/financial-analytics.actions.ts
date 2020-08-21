import { createAction, props } from "@ngrx/store";

export const Actions  =  {
    SET_IS_DATA_LAUNCHING: 'Set Is Data Launching',
    SET_IS_DATA_LOADED: 'Set Is Data Loaded',
    SET_FINANCIALS_DATA: 'Set Financials Data',
    SET_PRODUCTS_ANALYTICS_DATA: 'Set Products Analytics Data',
    SET_COUNTRIES_ANALYTICS_DATA: 'Set Countries Analytics Data',
    SET_SPORT_BETTING_ANALYTICS_DATA: 'Set Sport Betting Analytics Data',
    SET_PR_ANALYTICS_DATA: 'Set PR Analytics Data',
    SET_DEFAULT_STATE: 'Set Default State',
    SET_IS_SIDEMENU_OPEN: 'Set Is Sidemenu Open',
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

export const setSportBettingAnalyticsData = createAction(
    Actions.SET_SPORT_BETTING_ANALYTICS_DATA,
    props<{ data }>()
);

export const setPrAnalyticsData = createAction(
    Actions.SET_PR_ANALYTICS_DATA,
    props<{ data }>()
);

export const setDefaultState = createAction(
  Actions.SET_DEFAULT_STATE
  );

export const setIsSidemenuOpen = createAction(
    Actions.SET_IS_SIDEMENU_OPEN,
    props<{ isSidemenuOpen }>()
);
