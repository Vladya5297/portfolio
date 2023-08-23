import {useEffect, useState} from 'react';

import {windowsActions} from '~/page/state/windows';
import type {Position, Size, WindowId} from '~/page/state/windows';
import {useWindowExists} from '~/page/utils/useWindowExists';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {useAction} from '~/utils/redux/useAction';

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

    const defaults = getDefaultRect(root, defaultSize, defaultPosition);
    const setup = useAction(() => windowsActions.addWindow({
        id,
        title,
        image,
        defaultSize: defaults.size,
        defaultPosition: defaults.position,
    }));

    useEffect(() => {
        if (ready) return;

        setup();
        setReady(true);
    }, []);

    return ready;
};
