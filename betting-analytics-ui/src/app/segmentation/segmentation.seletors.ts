import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SegmentationState } from './segmentation.state';

export const getSegmentationState = createFeatureSelector<SegmentationState>(
    'segmentation'
);

export const getMembersData = createSelector(
    getSegmentationState,
    (segmentation: SegmentationState) => segmentation.members,
);

export const getIsDataLoaded = createSelector(
    getSegmentationState,
    (segmentation: SegmentationState) => segmentation.isDataLoaded,
);

export const getIsDataLaunching = createSelector(
    getSegmentationState,
    (segmentation: SegmentationState) => segmentation.isDataLaunching,
);
