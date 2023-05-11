import {useId} from 'react';
import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows/types';
import {selectActiveWindowId, selectQueueIndex, selectWindow} from '~/page/state/windows/selectors';
import type {State} from '~/page/state/types';
import {Window as WindowBase} from '~/components/Window';

import {useRoot, useSetup} from './utils';

type Props = {
    title: string;
    image: string;
    children: ReactNode;
};

export const Window = ({title, image, children}: Props) => {
    const windowId = useId() as WindowId;
    useSetup({id: windowId, title, image});

    const window = useSelector((state: State) => selectWindow(state, windowId));
    const root = useRoot();

    const minimize = useAction(() => windowsSlice.actions.setMinimized(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));
    const close = useAction(() => windowsSlice.actions.setClosed(windowId));

    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const index = useSelector((state: State) => selectQueueIndex(state, windowId));

    const showWindow = root && window && !window.isMinimized;

    return showWindow ? (
        <WindowBase
            title={title}
            image={image}
            root={root}
            active={isActive}
            onMouseDown={setActive}
            onMinimize={minimize}
            onClose={close}
            style={{zIndex: index}}
        >
            {children}
        </WindowBase>
    ) : null;
};
