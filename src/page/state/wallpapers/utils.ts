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
const BG_IMAGE = '--background-image';

export const setBackground = (value: WallpapersValue): void => {
    const style = document.body.style;

    // Default background
    if (!value.src) {
        style.removeProperty(BG_IMAGE);
        return;
    }

    const placeholder = `url(${value.placeholder})`;
    const image = `url(${value.src})`;

    // Already loaded image
    if (images.has(value.name)) {
        style.setProperty(BG_IMAGE, image);
        return;
    }

    // Show placeholder
    style.setProperty(BG_IMAGE, placeholder);

    loadImage(value.src).then(() => {
        // If still the same placeholder - change image
        if (style.getPropertyValue(BG_IMAGE) === placeholder) {
            style.setProperty(BG_IMAGE, image);
            images.add(value.name);
        }
    }).catch(() => {
        style.removeProperty(BG_IMAGE);
    });
};
