import type {State} from '../types';

import type {Window, WindowId} from './types';

import {windowAdapter} from './index';

const windowsSelectors = windowAdapter.getSelectors<State>(state => state.windows);

export const selectWindow = (state: State, windowId: WindowId): Window | null => {
    const window = windowsSelectors.selectById(state, windowId);

    return window || null;
};

export const selectActiveWindowId = (state: State): WindowId | null => {
    return state.windows.active;
};

export const selectQueueIndex = (state: State, windowId: WindowId): number => {
    return state.windows.queue.indexOf(windowId);
};
