import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromAppContext from './../app.actions';

export const CONTEXT_FEATURE_KEY = 'appContext';

export interface AppContextState {
  itemsDynamicMenubar: any[];
  selectedPath;
}

export const initialAppContextState: AppContextState = {
  itemsDynamicMenubar: [],
  selectedPath: '',
};

export const reducer = createReducer(
  initialAppContextState,
  on(fromAppContext.setInitialStateToBeAnalytics, state => ({
    ...state,
    itemsDynamicMenubar: [
      {
        label: 'Analytics',
        path: 'analytics',
        closeable: false,
      },
    ],
    selectedPath: 'analytics',
  })),

  on(fromAppContext.setInitialStateToBeBetting, state => ({
    ...state,
    itemsDynamicMenubar: [
      {
        label: 'Betting',
        path: 'betting',
        closeable: false,
      },
    ],
    selectedPath: 'betting',
  })),

  on(fromAppContext.openNewTab, (state, { item }) => ({
    ...state,
    itemsDynamicMenubar:
      state.itemsDynamicMenubar &&
      state.itemsDynamicMenubar.some(i => i.path === item.path)
        ? state.itemsDynamicMenubar
        : [...state.itemsDynamicMenubar, item],
    selectedPath: item.path,
  })),

  on(fromAppContext.closeTab, (state, { item }) => ({
    ...state,
    itemsDynamicMenubar: state.itemsDynamicMenubar
      ? state.itemsDynamicMenubar.filter(e => e.path !== item.path)
      : [],
  })),

  on(fromAppContext.selectTab, (state, { path }) => ({
    ...state,
    selectedPath: path,
  })),
);

// SELECTORS
export const getAppContextState = createFeatureSelector<AppContextState>(
  'appContext',
);
export const getItemsDynamicMenubar = createSelector(
  getAppContextState,
  (appContext: AppContextState) => appContext.itemsDynamicMenubar,
);
export const getSelectedPath = createSelector(
  getAppContextState,
  (appContext: AppContextState) => appContext.selectedPath,
);
