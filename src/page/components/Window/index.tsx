import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {Position, WindowId} from '~/page/state/windows/types';
import {selectActiveWindowId, selectQueueIndex, selectWindow} from '~/page/state/windows/selectors';
import type {State} from '~/page/state/types';
import {Window as View} from '~/components/Window';

type Props = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const Window = ({id: windowId, root, content}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId));

    const minimize = useAction(() => windowsSlice.actions.setMinimized(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));
    const close = useAction(() => windowsSlice.actions.setClosed(windowId));
    const setupPosition = useAction(
        (position: Position) => windowsSlice.actions.setupPosition({id: windowId, position}),
    );

    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const index = useSelector((state: State) => selectQueueIndex(state, windowId));

    const showWindow = window
        && window.isOpened
        && !window.isMinimized;

    return showWindow ? (
        <View
            title={window.title}
            image={window.image}
            root={root}
            active={isActive}
            position={window.position}
            onMouseDown={setActive}
            onMinimize={minimize}
            onClose={close}
            onDragStop={setupPosition}
            style={{zIndex: index}}
        >
            {content}
        </View>
    ) : null;
};
