import type {Setup} from '../../game/types';

import {bulletColor, bulletHeight, bulletSpeed, bulletWidth} from './constants';

export const setup: Setup = (ctx, runtime) => {
    const handler = (event: KeyboardEvent) => {
        if (runtime.bullet) return;

        if (event.key === ' ') {
            runtime.bullet = runtime.player.fire({
                size: {width: bulletWidth, height: bulletHeight},
                speed: bulletSpeed,
                color: bulletColor,
            });
        }
    };

    document.addEventListener('keydown', handler);

    return () => {
        document.removeEventListener('keydown', handler);
    };
};
