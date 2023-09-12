import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import type {State} from '~/page/state/types';
import {selectWindowExists, windowsActions} from '~/page/state/windows';
import type {Position, Size, WindowId} from '~/page/state/windows';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {useAction} from '~/utils/redux/useAction';

type Options = Partial<{
    throw: boolean;
    message: string;
}>;

export const useWindowExists = (windowId: WindowId, options: Options = {}) => {
    const exists = useSelector((state: State) => selectWindowExists(state, windowId));

    if (!exists && options.throw) {
        throw new Error(options.message || `Seems like you haven't call useSetup for windowId: ${windowId}`);
    }

    return exists;
};

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

type Params = {
    root: HTMLElement;
    id: WindowId;
    title: string;
    image: string;
    defaultSize?: Size;
    defaultPosition?: Position;
};

export const useSetup = ({
    id,
    title,
    image,
    root,
    defaultSize,
    defaultPosition,
}: Params): boolean => {
    const exists = useWindowExists(id);
    const [ready, setReady] = useState(exists);

    const setup = useAction(windowsActions.addWindow);

    useEffect(() => {
        if (ready) return;

        const defaults = getDefaultRect(root, defaultSize, defaultPosition);

        setup({
            id,
            title,
            image,
            defaultSize: defaults.size,
            defaultPosition: defaults.position,
        });

        setReady(true);
    }, []);

    return ready;
};
