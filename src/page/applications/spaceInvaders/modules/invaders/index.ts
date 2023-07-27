import type {Module} from '../../game/types';

import {checkCollision} from './checkCollision';
import {draw} from './draw';
import {move} from './move';
import {setup} from './setup';

export const invaders: Module = {
    setup,
    raf: [draw, move, checkCollision],
};
