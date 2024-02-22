import {INVADERS_CONFIG, INVADER_TYPE} from '../../../elements/invader/constants';

export const INVADERS_GAP = 10;

const INVADERS_PER_ROW = 7;
export const ROWS_CONFIG = [
    {
        type: INVADER_TYPE.TOP,
        count: INVADERS_PER_ROW,
    },
    {
        type: INVADER_TYPE.TOP,
        count: INVADERS_PER_ROW,
    },
    {
        type: INVADER_TYPE.MID,
        count: INVADERS_PER_ROW,
    },
    {
        type: INVADER_TYPE.MID,
        count: INVADERS_PER_ROW,
    },
    {
        type: INVADER_TYPE.BOT,
        count: INVADERS_PER_ROW,
    },
    {
        type: INVADER_TYPE.BOT,
        count: INVADERS_PER_ROW,
    },
];

export const INVADERS_MAX_WIDTH = Math.max(
    ...Object.values(INVADERS_CONFIG).map(({width}) => width),
);
