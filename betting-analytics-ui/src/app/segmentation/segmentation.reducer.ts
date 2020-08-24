import { createReducer, on } from '@ngrx/store';
import { initialSegmentationState } from './segmentation.state';
import * as segmentationActions from './segmentation.actions';

export const segmentationReducer = createReducer(
    initialSegmentationState,
    on(segmentationActions.setIsValid, (state, { isValid }) => {
        return ({ ...state, isValid: isValid });
    }),
    on(segmentationActions.setMembersData, (state, { members }) => {
        return ({ ...state, members: members });
    }),
    on(segmentationActions.setIsDataLoaded, (state, { isDataLoaded }) => {
        return ({ ...state, isDataLoaded: isDataLoaded });
    }),
    on(segmentationActions.setIsDataLaunching, (state, { isDataLaunching}) => {
        return ({ ...state, isDataLaunching: isDataLaunching });
    }),
    on(segmentationActions.setDefaultData, (state) => {
        return ({ ...state,
                  isDataLaunching: false,
                  isDataLoaded: false,
                  members: null,
                  isValid: false,
                  });
    }),
);
