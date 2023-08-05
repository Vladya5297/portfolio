import {createShallowSelector} from '~/utils/redux/createShallowSelector';
import {paramSelector} from '~/utils/redux/paramSelector';

import type {State} from '../types';

import type {Window, WindowId} from './types';
import {windowAdapter} from './slice';

const windowsSelectors = windowAdapter.getSelectors<State>(state => state.windows);

export const selectWindowExists = (state: State, windowId: WindowId): boolean => {
    const window = windowsSelectors.selectById(state, windowId);

    return Boolean(window);
};

export const selectWindow = createShallowSelector(
    [
        (state: State) => state.windows.entities,
        paramSelector<WindowId>,
    ],
    (windows, windowId) => windows[windowId] as Window,
);

export const selectActiveWindowId = (state: State): WindowId | null => {
    return state.windows.active;
};

export const selectQueueIndex = (state: State, windowId: WindowId): number => {
    return state.windows.queue.indexOf(windowId);
};

export const selectOpenedWindows = createShallowSelector(
    [windowsSelectors.selectAll],
    (windows: Window[]): WindowId[] => windows
        .filter(window => window.isOpened)
        .map(window => window.id),
);

export const selectWindowConstraints = (state: State) => {
    return state.windows.constraints;
};
