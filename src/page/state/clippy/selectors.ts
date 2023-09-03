import type {Status} from '~/constants/status';

import type {State} from '../types';

export const selectClippyMessageStatus = (state: State): Status => {
    return state.clippy.message.status;
};

export const selectClippyMessage = (state: State): string => {
    return state.clippy.message.value;
};

export const selectIsClippyVisible = (state: State): boolean => {
    return state.clippy.visible;
};
