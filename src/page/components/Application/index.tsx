import type {ReactNode} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {windowsActions} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';

import {Shortcut} from '../Shortcut';
import {Window} from '../Window';

import {useRoot} from './utils';

export * from './utils';

type Position = {
    row: number | 'last';
    column: number | 'last';
};

export type ApplicationProps = {
    id: WindowId;
    title: string;
    image: string;
    position?: Position;
    content: ReactNode;
};

/** Make sure to call `setup` before render! */
export const Application = ({id: windowId, title, image, position, content}: ApplicationProps) => {
    const root = useRoot();

    const openWindow = useAction(() => windowsActions.open(windowId));

    return (
        <>
            <Shortcut title={title} image={image} {...position} onClick={openWindow} />

            {root ? <Window id={windowId} root={root} content={content} /> : null}
        </>
    );
};
