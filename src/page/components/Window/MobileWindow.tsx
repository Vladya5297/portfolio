import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {useAction} from '~/utils/redux/useAction';
import {windowsActions, selectQueueIndex, selectWindow, selectWindowConstraints} from '~/page/state/windows';
import type {State} from '~/page/state/types';

import type {WindowProps} from './types';

export const MobileWindow = ({id: windowId, root, content}: WindowProps) => {
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
            draggable={false}
            resizable={false}
            onClose={setClosed}
            initialSize={constraints}
            style={{zIndex: index}}
        >
            {content}
        </Window>
    ) : null;
};
