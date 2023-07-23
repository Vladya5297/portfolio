import {draw} from './draw';
import {moveInvaders} from './move';
import {setup} from './setup';

export const invaders = {
    setup,
    raf: [draw, moveInvaders],
};
