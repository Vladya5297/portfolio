import type {State} from '../types';

import type {ClippyMessage} from './types';

export const selectClippyMessage = (state: State): ClippyMessage => {
    return state.clippy.message;
};

export const selectIsClippyVisible = (state: State): boolean => {
    return state.clippy.visible;
};
