import {useEffect, useState} from 'react';

import {windowsActions} from '~/page/state/windows';
import type {Position, Size, WindowId} from '~/page/state/windows';
import {useWindowExists} from '~/page/utils/useWindowExists';
import {useAction} from '~/utils/redux/useAction';

const DEFAULT_SIZE: Size = {
    width: 600,
    height: 500,
};

type Rect = {
    position: Position;
    size: Size;
};

export const getDefaultRect = (root: HTMLElement): Rect => {
    const {width: maxWidth, height: maxHeight} = root.getBoundingClientRect();
    const width = Math.min(DEFAULT_SIZE.width, maxWidth);
    const height = Math.min(DEFAULT_SIZE.height, maxHeight);

    const x = maxWidth / 2 - width / 2;
    const y = maxHeight / 2 - height / 2;

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

    const defaults = getDefaultRect(root);
    const setup = useAction(() => windowsActions.addWindow({
        id,
        title,
        image,
        defaultSize: defaultSize ?? defaults.size,
        defaultPosition: defaultPosition ?? defaults.position,
    }));

    useEffect(() => {
        if (ready) return;

        setup();
        setReady(true);
    }, []);

    return ready;
};
