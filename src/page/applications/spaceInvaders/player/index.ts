import {draw} from './draw';
import {setup} from './setup';

export const player = {
    setup,
    raf: [draw],
};
