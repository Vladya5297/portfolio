import type {WindowId, WindowsState} from './types';

export const removeFromQueue = (state: WindowsState, windowId: WindowId): void => {
    const index = state.queue.indexOf(windowId);

    if (index !== -1) {
        state.queue.splice(index, 1);
    }
};

export const updateActive = (state: WindowsState, windowId?: WindowId): void => {
    const previous = state.queue.at(-1);
    const id = windowId || previous || null;
    state.active = id;
};
