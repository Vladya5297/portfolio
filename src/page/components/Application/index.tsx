import type {ReactNode} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {windowsSlice} from '~/page/state/windows';
import {selectWindow} from '~/page/state/windows/selectors';
import type {WindowId} from '~/page/state/windows/types';
import type {State} from '~/page/state/types';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/pick';

import {Shortcut} from '../Shortcut';
import {Window} from '../Window';

import {useRoot} from './utils';

export * from './utils';

type Position = {
    row: number | 'last';
    column: number | 'last';
};

type Props = {
    id: WindowId;
    title: string;
    image: string;
    position?: Position;
    content: ReactNode;
};

/** Make sure to call `setup` before render! */
export const Application = ({id: windowId, title, image, position, content}: Props) => {
    const root = useRoot();
    const window = useSelectorMapper(
        (state: State) => selectWindow(state, windowId),
        value => pick(value, ['isMinimized', 'isOpened']),
    );

    const setOpened = useAction(() => windowsSlice.actions.setOpened(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));
    const setMaximized = useAction(() => windowsSlice.actions.setMaximized(windowId));

    const onClick = () => {
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

    return (
        <>
            <Shortcut title={title} image={image} {...position} onClick={onClick} />

            {root ? <Window id={windowId} root={root} content={content} /> : null}
        </>
    );
};
