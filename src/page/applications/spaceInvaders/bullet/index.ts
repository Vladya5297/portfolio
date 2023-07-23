import {checkCollision} from './checkCollision';
import {draw} from './draw';
import {move} from './move';
import {setup} from './setup';

export const bullet = {
    setup,
    raf: [draw, move, checkCollision],
};
