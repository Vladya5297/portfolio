import type {Position, WindowId, WindowsState} from './types';

export const getDefaultPosition = (): Position => {
    const {width} = document.body.getBoundingClientRect();
    const x = width / 2 - 200;
    const y = 100;

    return {x, y};
};

export const removeFromQueue = (state: WindowsState, windowId: WindowId): void => {
    const index = state.queue.indexOf(windowId);

    if (index !== -1) {
        state.queue.splice(index, 1);
    }
};

export const updateActive = (state: WindowsState): void => {
    const previous = state.queue.at(-1);
    state.active = previous || null;
};
