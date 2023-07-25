import type {Module} from '../../game/types';

import {draw} from './draw';
import {setup} from './setup';

export const player: Module = {
    setup,
    raf: [draw],
};
