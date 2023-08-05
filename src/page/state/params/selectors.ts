import type {State} from '../types';

export const selectParams = (state: State) => {
    return state.params;
};

export const selectWindowIdParam = (state: State) => {
    const params = selectParams(state);

    return params.windowId;
};
