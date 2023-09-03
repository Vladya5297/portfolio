import type {State} from '../types';

import type {WallpapersValue} from './types';

export const selectWallpapersIsOpen = (state: State): boolean => {
    return state.wallpapers.isOpen;
};

export const selectWallpapersValue = (state: State): WallpapersValue => {
    return state.wallpapers.value;
};
