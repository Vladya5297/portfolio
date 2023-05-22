import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import {selectWindow} from '~/page/state/windows/selectors';
import type {WindowId} from '~/page/state/windows/types';
import type {State} from '~/page/state/types';

import {Shortcut} from '../Shortcut';
import {Window} from '../Window';

import {useRoot, useSetup} from './utils';

type Position = {
    row: number | 'last';
    column: number | 'last';
};

type Props = {
    id: string;
    title: string;
    image: string;
    position?: Position;
    content: ReactNode;
};

export const Application = ({id, title, image, position, content}: Props) => {
    const windowId = id as WindowId;
    useSetup({id: windowId, title, image});

    const root = useRoot();
    const window = useSelector((state: State) => selectWindow(state, windowId));

    const setOpened = useAction(() => windowsSlice.actions.setOpened(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));
    const setMaximized = useAction(() => windowsSlice.actions.setMaximized(windowId));

    const onClick = () => {
        if (!window) return;

        if (window.isMinimized) {
            setMaximized();
            return;
        }

        if (window.isOpened) {
            setActive();
            return;
        }

        setOpened();
    };

    const showWindow = root && window;

    return (
        <>
            <Shortcut title={title} image={image} {...position} onClick={onClick} />

            {showWindow ? <Window id={windowId} root={root} content={content} /> : null}
        </>
    );
};
