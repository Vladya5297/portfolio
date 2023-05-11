import type {WindowId, WindowsState} from './types';

export const removeFromQueue = (state: WindowsState, windowId: WindowId) => {
    const index = state.queue.indexOf(windowId);

    if (index !== -1) {
        state.queue.splice(index, 1);
    }
};

export const updateActive = (state: WindowsState) => {
    const previous = state.queue.at(-1);
    state.active = previous || null;
};
