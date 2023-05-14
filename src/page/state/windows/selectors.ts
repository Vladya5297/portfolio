import {createSelector} from '@reduxjs/toolkit';
import {shallowEqual} from 'react-redux';

import type {State} from '../types';
import {paramSelector} from '../utils';

import type {Window, WindowId} from './types';

import {windowAdapter} from './index';

const windowsSelectors = windowAdapter.getSelectors<State>(state => state.windows);

export const selectWindow = createSelector(
    [
        (state: State) => state.windows.entities,
        paramSelector<WindowId>,
    ],
    (windows, windowId) => windows[windowId],
    {memoizeOptions: {resultEqualityCheck: shallowEqual}},
);

export const selectActiveWindowId = (state: State): WindowId | null => {
    return state.windows.active;
};

export const selectQueueIndex = (state: State, windowId: WindowId): number => {
    return state.windows.queue.indexOf(windowId);
};

export const selectOpenedWindows = createSelector(
    [windowsSelectors.selectAll],
    (windows: Window[]): WindowId[] => windows
        .filter(window => window.isOpened)
        .map(window => window.id),
    {memoizeOptions: {resultEqualityCheck: shallowEqual}},
);
