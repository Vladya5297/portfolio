import type {Bounds} from '..';

import {getEventCoords} from './getEventCoords';

export const getEventHandler = (
    bounds: Bounds,
    handler?: () => void,
) => (event: MouseEvent | TouchEvent) => {
    const {x, y} = getEventCoords(event);

    if (
        x > bounds.left
        && x < bounds.right
        && y > bounds.top
        && y < bounds.bottom
    ) {
        handler?.();
    }
};
