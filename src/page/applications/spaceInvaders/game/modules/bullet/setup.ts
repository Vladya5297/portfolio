import {onKeyDown} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import type {Setup} from '../../types';

import {bulletColor, bulletHeight, bulletSpeed, bulletWidth} from './constants';

export const setup: Setup = (ctx, runtime) => {
    const clear = onKeyDown(KEYBOARD_KEY.SPACE, () => {
        if (runtime.bullet) return;

        runtime.bullet = runtime.player.fire({
            size: {width: bulletWidth, height: bulletHeight},
            speed: bulletSpeed,
            color: bulletColor,
        });
    });

    return clear;
};
