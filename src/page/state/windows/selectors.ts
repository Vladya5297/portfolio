import {createShallowSelector} from '~/utils/redux/createShallowSelector';

import type {State} from '../types';

import type {Size, Window, WindowId} from './types';
import {windowAdapter} from './slice';

const windowsSelectors = windowAdapter.getSelectors<State>(state => state.windows);

export const selectWindowExists = (state: State, windowId: WindowId): boolean => {
    const window = windowsSelectors.selectById(state, windowId);

    return Boolean(window);
};

export const selectWindow = (state: State, windowId: WindowId): Window => {
    return windowsSelectors.selectById(state, windowId) as Window;
};

export const selectActiveWindowId = (state: State): WindowId | null => {
    return state.windows.active;
};

export const selectIsWindowActive = (state: State, windowId: WindowId): boolean => {
    const activeWindowId = selectActiveWindowId(state);

    return activeWindowId === windowId;
};

export const selectQueueIndex = (state: State, windowId: WindowId): number => {
    return state.windows.queue.indexOf(windowId);
};

export const selectOpenWindows = createShallowSelector(
    [windowsSelectors.selectAll],
    (windows: Window[]): WindowId[] => windows
        .filter(window => window.isOpen)
        .map(window => window.id),
);

export const selectWindowConstraints = (state: State): Size => {
    return state.windows.constraints;
};
