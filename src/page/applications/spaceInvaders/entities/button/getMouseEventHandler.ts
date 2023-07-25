import type {Bounds} from '../abstract';

import {getEventCoords} from './getEventCoords';

export const getMouseEventHandler = (
    bounds: Bounds,
    handler?: () => void,
) => (event: MouseEvent) => {
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
