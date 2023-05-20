import {DEFAULT_SIZE} from './constants';
import type {Position, Size, WindowId, WindowsState} from './types';

type Rect = {
    position: Position;
    size: Size;
};

export const getDefaultRect = (): Rect => {
    const {width: maxWidth, height: maxHeight} = document.body.getBoundingClientRect();
    const width = Math.min(DEFAULT_SIZE.width, maxWidth);
    const height = Math.min(DEFAULT_SIZE.height, maxHeight);

    const x = maxWidth / 2 - width / 2;
    const y = maxHeight / 2 - height / 2;

    return {
        position: {x, y},
        size: {width, height},
    };
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
