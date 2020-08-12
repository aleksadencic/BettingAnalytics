import { createReducer, on } from '@ngrx/store';
import { initialSegmentationState } from './segmentation.state';
import * as segmentationActions from './segmentation.actions';

export const segmentationReducer = createReducer(
    initialSegmentationState,
    on(segmentationActions.setIsValid, (state, { isValid }) => {
        return ({ ...state, isValid: isValid });
    }),
);