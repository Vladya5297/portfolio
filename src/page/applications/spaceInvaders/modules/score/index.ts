import type {Module} from '../../game/types';

import {draw} from './draw';
import {setup} from './setup';

export const score: Module = {
    setup,
    raf: [draw],
};
