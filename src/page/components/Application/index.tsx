import type {ReactNode} from 'react';

import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows/types';

import {Shortcut} from '../Shortcut';
import {Window} from '../Window';

import {useRoot, useSetup} from './utils';

type Position = {
    row: number;
    column: number;
};

type Props = {
    id: string;
    title: string;
    image: string;
    position: Position;
    content: ReactNode;
};

export const Application = ({id, title, image, position, content}: Props) => {
    const windowId = id as WindowId;
    useSetup({id: windowId, title, image});

    const root = useRoot();

    const open = useAction(() => windowsSlice.actions.setOpened(windowId));

    return (
        <>
            <Shortcut title={title} image={image} {...position} onClick={open} />

            {root ? <Window id={windowId} root={root} content={content} /> : null}
        </>
    );
};
