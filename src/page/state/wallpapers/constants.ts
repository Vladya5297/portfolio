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
    src: undefined,
    placeholder: undefined,
};

export const wallpapers: WallpapersValue[] = [
    DEFAULT_WALLPAPER,
    {
        name: 'field',
        src: field.src,
        placeholder: field.placeholder,
    },
    {
        name: 'mountains',
        src: mountains.src,
        placeholder: mountains.placeholder,
    },
    {
        name: 'night',
        src: night.src,
        placeholder: night.placeholder,
    },
    {
        name: 'retrowave',
        src: retrowave.src,
        placeholder: retrowave.placeholder,
    },
    {
        name: 'sunset',
        src: sunset.src,
        placeholder: sunset.placeholder,
    },
];
