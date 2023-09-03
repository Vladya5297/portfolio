import type {WallpapersValue} from '~/page/state/wallpapers';

import field from './assets/field.png';
import mountains from './assets/mountains.png';
import night from './assets/night.png';
import retrowave from './assets/retrowave.png';
import sunset from './assets/sunset.png';

export const STATE_ID = 'wallpapers';

export const LS_KEY = 'wallpapers';

export const DEFAULT_WALLPAPER: WallpapersValue = {
    name: 'default',
    src: null,
};

export const wallpapers: WallpapersValue[] = [
    DEFAULT_WALLPAPER,
    {
        name: 'field',
        src: field.src,
    },
    {
        name: 'mountains',
        src: mountains.src,
    },
    {
        name: 'night',
        src: night.src,
    },
    {
        name: 'retrowave',
        src: retrowave.src,
    },
    {
        name: 'sunset',
        src: sunset.src,
    },
];
