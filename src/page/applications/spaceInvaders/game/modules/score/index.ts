import type {Module} from '../../types';

import {draw} from './draw';
import {setup} from './setup';

export const score: Module = {
    setup,
    raf: [draw],
};
