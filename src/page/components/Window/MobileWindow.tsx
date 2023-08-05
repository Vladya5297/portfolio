import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {useAction} from '~/utils/redux/useAction';
import {windowsActions, selectQueueIndex, selectWindow, selectWindowConstraints} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows/types';
import type {State} from '~/page/state/types';

type Props = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const MobileWindow = ({id: windowId, root, content}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId));
    const index = useSelector((state: State) => selectQueueIndex(state, windowId));
    const constraints = useSelector(selectWindowConstraints);

    const setClosed = useAction(() => windowsActions.setClosed(windowId));

    const showWindow = window.isOpened && !window.isMinimized;

    return showWindow ? (
        <Window
            title={window.title}
            image={window.image}
            root={root}
            active
            onClose={setClosed}
            initialSize={constraints}
            style={{zIndex: index}}
        >
            {content}
        </Window>
    ) : null;
};
