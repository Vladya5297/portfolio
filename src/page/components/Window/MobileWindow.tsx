import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows/types';
import {selectQueueIndex, selectWindow} from '~/page/state/windows/selectors';
import type {State} from '~/page/state/types';
import {Window} from '~/components/Window';

import {useRootSize} from './utils';

type Props = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const MobileWindow = ({id: windowId, root, content}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId))!;
    const index = useSelector((state: State) => selectQueueIndex(state, windowId));
    const rootSize = useRootSize(root);

    const setClosed = useAction(() => windowsSlice.actions.setClosed(windowId));

    const showWindow = window.isOpened && !window.isMinimized;

    return showWindow ? (
        <Window
            title={window.title}
            image={window.image}
            root={root}
            active
            onClose={setClosed}
            initialSize={rootSize}
            style={{zIndex: index}}
        >
            {content}
        </Window>
    ) : null;
};
