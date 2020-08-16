import { createAction, props } from "@ngrx/store";

export const SET_IS_DATA_LAUNCHING = 'Set Is Data Launching';
export const SET_IS_DATA_LOADED = 'Set Is Data Loaded';

export const setIsDataLaunching = createAction(
    SET_IS_DATA_LAUNCHING,
    props<{ isDataLaunching }>()
);

export const setIsDataLoaded = createAction(
    SET_IS_DATA_LOADED,
    props<{ isDataLoaded }>()
);
