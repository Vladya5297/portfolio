import type {Module} from '../../types';

import {draw} from './draw';
import {setup} from './setup';

export const player: Module = {
    setup,
    raf: [draw],
};
