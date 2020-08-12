import { createAction, props } from "@ngrx/store";

export const SET_IS_VALID = 'Set Is Valid';

export const setIsValid = createAction(
    SET_IS_VALID,
    props<{ isValid }>()
);
