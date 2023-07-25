import {sprites} from './sprites';
import type {InvaderConfig} from './types';

export const invadersConfigs: InvaderConfig[] = [
    {
        width: 26,
        height: 26,
        sprites: [sprites.alienTop1, sprites.alienTop2],
    },
    {
        width: 26,
        height: 26,
        sprites: [sprites.alienTop1, sprites.alienTop2],
    },
    {
        width: 36,
        height: 26,
        sprites: [sprites.alienMid1, sprites.alienMid2],
    },
    {
        width: 36,
        height: 26,
        sprites: [sprites.alienMid1, sprites.alienMid2],
    },
    {
        width: 40,
        height: 26,
        sprites: [sprites.alienBot1, sprites.alienBot2],
    },
    {
        width: 40,
        height: 26,
        sprites: [sprites.alienBot1, sprites.alienBot2],
    },
];

export const invadersMaxWidth = Math.max(...invadersConfigs.map(({width}) => width));
export const initialSpeedX = 0.5;
export const initialSpeedY = 5;
export const invaderPerRow = 7;
export const invadersGap = 10;
