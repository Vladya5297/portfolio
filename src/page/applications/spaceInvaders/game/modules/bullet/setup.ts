import {SPACE_KEY} from '../../constants';
import type {Setup} from '../../types';
import {onKeyDown} from '../../../utils/onKeyDown';

import {bulletColor, bulletHeight, bulletSpeed, bulletWidth} from './constants';

export const setup: Setup = (ctx, runtime) => {
    const clear = onKeyDown(SPACE_KEY, () => {
        if (runtime.bullet) return;

        runtime.bullet = runtime.player.fire({
            size: {width: bulletWidth, height: bulletHeight},
            speed: bulletSpeed,
            color: bulletColor,
        });
    });

    return clear;
};
