import type {Module} from '../../game/types';

import {draw} from './draw';
import {setup} from './setup';

export const controls: Module = {
    setup,
    raf: [draw],
};
