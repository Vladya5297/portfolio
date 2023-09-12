import {loadImage} from '~/utils/loadImage';

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

const images = new Set<string>();

export const setBackground = (value: WallpapersValue): void => {
    const style = document.body.style;

    // Default background
    if (!value.src) {
        style.removeProperty('--background-image');
        return;
    }

    // Already loaded image
    if (images.has(value.name)) {
        style.setProperty('--background-image', `url(${value.src})`);
        return;
    }

    // Loading image and showing placeholder
    style.setProperty('--background-image', `url(${value.placeholder})`);
    loadImage(value.src).then(() => {
        style.setProperty('--background-image', `url(${value.src})`);
        images.add(value.name);
    }).catch(() => {
        style.removeProperty('--background-image');
    });
};
