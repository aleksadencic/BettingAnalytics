import { createAction, props } from "@ngrx/store";

export const Actions  =  {
  SET_MEMBERS_DATA: 'Set Members Data',
  SET_IS_DATA_LOADED: 'Set Is Data Loaded',
  SET_IS_DATA_LOADING: 'Set Is Data Loading',
  SET_IS_VALID: 'Set Is Valid',
  SET_DEFAULT_DATA: 'Set Default Data',
};

export const setMembersData = createAction(
  Actions.SET_MEMBERS_DATA,
  props<{ members }>()
);

export const setIsDataLoaded = createAction(
  Actions.SET_IS_DATA_LOADED,
  props<{ isDataLoaded }>()
);

export const setIsDataLaunching = createAction(
  Actions.SET_IS_DATA_LOADING,
  props<{ isDataLaunching }>()
);

export const setIsValid = createAction(
  Actions.SET_IS_VALID,
  props<{ isValid }>()
);

export const setDefaultData = createAction(
  Actions.SET_DEFAULT_DATA,
);
