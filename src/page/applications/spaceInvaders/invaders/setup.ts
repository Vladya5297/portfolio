import type {Setup} from '../game/types';

import {initialSpeedX, initialSpeedY, invaderPerRow, invadersConfigs, invadersGap, invadersMaxWidth} from './constants';
import {toggleImage} from './utils';

export const setup: Setup = (ctx, runtime) => {
    const iids: ReturnType<typeof setInterval>[] = [];

    let y = 10;

    const invaders = invadersConfigs.map(({width, height, sprites}) => {
        const offset = (invadersMaxWidth - width) / 2;

        // Create row of invaders
        const result = Array.from({length: invaderPerRow}).map((_, i) => ({
            // Calculate initial position of each invader in row
            x: offset + i * (width + offset + invadersGap + offset),
            y,
            width,
            height,
            image: sprites[0],
        }));

        // Setup next row position
        y += height + invadersGap;

        return result;
    });

    // Setup animated sprites
    invaders.forEach((arr, i) => {
        const {sprites} = invadersConfigs[i];

        const iid = setInterval(() => {
            arr.forEach(invader => toggleImage(invader, sprites));
        }, 1000);

        iids.push(iid);
    });

    runtime.invaders = {
        speedX: initialSpeedX,
        speedY: initialSpeedY,
        list: new Set(invaders.flat()),
    };

    return () => {
        iids.forEach(clearInterval);
    };
};
