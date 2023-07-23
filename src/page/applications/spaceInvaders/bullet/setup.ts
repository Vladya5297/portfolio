import type {Bullet, Player, Setup} from '../game/types';

import {bulletHeight, bulletSpeed, bulletWidth} from './constants';

const makeBullet = (player: Player): Bullet => {
    const center = player.x + player.width / 2;

    return {
        x: center - bulletWidth / 2,
        y: player.y - bulletHeight,
        width: bulletWidth,
        height: bulletHeight,
        speed: bulletSpeed,
        color: 'yellow',
    };
};

export const setup: Setup = (ctx, runtime) => {
    const handler = (event: KeyboardEvent) => {
        if (runtime.bullet) return;

        if (event.key === ' ') {
            runtime.bullet = makeBullet(runtime.player!);
        }
    };

    document.addEventListener('keydown', handler);

    return () => {
        document.removeEventListener('keydown', handler);
    };
};
