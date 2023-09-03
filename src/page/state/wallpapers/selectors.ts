import type {State} from '../types';

import type {WallpapersValue} from './types';

export const selectWallpapersIsOpened = (state: State): boolean => {
    return state.wallpapers.isOpened;
};

export const selectWallpapersValue = (state: State): WallpapersValue => {
    return state.wallpapers.value;
};
