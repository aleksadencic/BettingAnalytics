import { createAction, props } from '@ngrx/store';

export const setInitialStateToBeAnalytics = createAction(
  '[AppContext] Set Initial State To Be Analytics',
);
export const setInitialStateToBeBetting = createAction(
  '[AppContext] Set Initial State To Be Betting',
);

export const openNewTab = createAction(
  '[AppContext] Open New Tab',
  props<{ item: any }>(),
);

export const closeTab = createAction(
  '[AppContext] Close Tab',
  props<{ item: any }>(),
);

export const selectTab = createAction(
  '[AppContext] Select Tab',
  props<{ path: string }>(),
);
