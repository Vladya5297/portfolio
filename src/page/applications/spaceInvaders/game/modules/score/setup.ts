import {Text} from '../../../entities/text';
import type {Setup} from '../../types';

import {textStyle} from './constants';

export const setup: Setup = (ctx, runtime) => {
    runtime.score.value = 0;
    runtime.score.text = new Text({
        value: 'score: 0',
        position: {x: 10, y: 20},
        style: textStyle,
    });
};
