import type {State} from '../types';

import type {ClippyAnimation, ClippyMessage} from './types';

export const selectClippyMessage = (state: State): ClippyMessage => {
    return state.clippy.message;
};

export const selectIsClippyVisible = (state: State): boolean => {
    return state.clippy.visible;
};

export const selectClippyAnimation = (state: State): ClippyAnimation => {
    return state.clippy.animation;
};
