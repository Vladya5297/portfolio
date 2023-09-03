import {DEFAULT_WALLPAPER, LS_KEY} from './constants';
import type {WallpapersValue} from './types';

export const getInitialValue = (): WallpapersValue => {
    try {
        const value = localStorage.getItem(LS_KEY);
        if (!value) return DEFAULT_WALLPAPER;
        return JSON.parse(value);
    } catch {
        return DEFAULT_WALLPAPER;
    }
};

export const setBackground = (value: WallpapersValue): void => {
    const style = document.body.style;

    if (!value.src) {
        style.removeProperty('--background-image');
    } else {
        style.setProperty('--background-image', `url(${value.src})`);
    }
};
