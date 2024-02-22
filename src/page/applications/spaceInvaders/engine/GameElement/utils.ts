import type {Lambda} from '~/utils/types';
import {invoke} from '~/utils/toolkit';

import type {GameElement} from '.';

export const checkCollision = (
    target: GameElement,
    elements: GameElement[],
    callbacks: Lambda[],
): void => {
    if (elements.some(element => element.collides(target))) {
        callbacks.forEach(invoke);
    }
};
