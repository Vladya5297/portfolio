import {windowsRootAtom} from '~/constants/atoms';
import {windowsActions} from '~/page/state/windows';
import type {Position, Size} from '~/page/state/windows';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {state} from '~/page/state';

import type {ApplicationParams} from './types';

const DEFAULT_SIZE: Size = {
    width: 600,
    height: 500,
};

type Rect = {
    position: Position;
    size: Size;
};

export const getDefaultRect = (
    root: HTMLElement,
    defaultSize: Partial<Size> = {},
    defaultPosition: Partial<Position> = {},
): Rect => {
    const {width: maxWidth, height: maxHeight} = root.getBoundingClientRect();
    const width = Math.min(defaultSize.width ?? DEFAULT_SIZE.width, maxWidth);
    const height = Math.min(defaultSize.height ?? DEFAULT_SIZE.height, maxHeight);

    const x = defaultPosition.x ?? getCenterCoordinate(maxWidth, width);
    const y = defaultPosition.y ?? getCenterCoordinate(maxHeight, height);

    return {
        position: {x, y},
        size: {width, height},
    };
};

export const setupWindow = (params: ApplicationParams): void => {
    const {id, image, title, window} = params;
    if (window === false) return;

    const {defaultSize, defaultPosition} = window ?? {};

    const callback = (root: HTMLElement | null) => {
        if (!root) return;

        const defaults = getDefaultRect(root, defaultSize, defaultPosition);

        state.dispatch(windowsActions.addWindow({
            id,
            image,
            title,
            defaultSize: defaults.size,
            defaultPosition: defaults.position,
        }));

        windowsRootAtom.unsubscribe(callback);
    };

    windowsRootAtom.subscribe(callback);
};
