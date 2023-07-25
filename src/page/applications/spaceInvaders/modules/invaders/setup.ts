import {Invader} from '../../entities/invader';
import type {Setup} from '../../game/types';

import {
    initialSpeedX,
    initialSpeedY,
    invaderPerRow,
    invadersConfigs,
    invadersGap,
    invadersMaxWidth,
} from './constants';

export const setup: Setup = (ctx, runtime) => {
    const iids: ReturnType<typeof setInterval>[] = [];

    let y = 10;

    const invaders = invadersConfigs.flatMap(({width, height, sprites}) => {
        const offset = (invadersMaxWidth - width) / 2;

        // Create row of invaders
        const result = Array.from({length: invaderPerRow}).map((_, i) => {
            // Calculate initial position of each invader in row
            const position = {
                x: offset + i * (width + offset + invadersGap + offset),
                y,
            };

            return new Invader({
                position,
                size: {width, height},
                sprites,
                speedX: initialSpeedX,
                speedY: initialSpeedY,
            });
        });

        // Setup next row position
        y += height + invadersGap;

        return result;
    });

    // Setup animated sprites
    invaders.forEach(invader => {
        const iid = setInterval(() => invader.toggleImage(), 1000);

        iids.push(iid);
    });

    runtime.invaders = new Set(invaders);

    return () => {
        iids.forEach(clearInterval);
    };
};
