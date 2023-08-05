import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {useAction} from '~/utils/redux/useAction';
import {
    windowsActions,
    selectActiveWindowId,
    selectQueueIndex,
    selectWindow,
    getDefaultRect,
    selectWindowConstraints,
} from '~/page/state/windows';
import type {Position, Size, WindowId} from '~/page/state/windows';
import type {State} from '~/page/state/types';

type Props = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const DesktopWindow = ({id: windowId, root, content}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId));
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const index = useSelector((state: State) => selectQueueIndex(state, windowId));

    const setMinimized = useAction(() => windowsActions.setMinimized(windowId));
    const setActive = useAction(() => windowsActions.setActive(windowId));
    const setClosed = useAction(() => windowsActions.setClosed(windowId));

    const onMouseDown = () => {
        if (isActive) return;
        setActive();
    };

    const setupPosition = useAction(
        (position: Position) => windowsActions.setupPosition({id: windowId, position}),
    );
    const setupSize = useAction(
        (size: Size) => windowsActions.setupSize({id: windowId, size}),
    );
    const onResizeStop = (size: Size, position: Position) => {
        setupSize(size);
        setupPosition(position);
    };

    const constraints = useSelector(selectWindowConstraints);
    const isFullWidth = window.size.width >= Math.floor(constraints.width);
    const isFullHeight = window.size.height >= Math.floor(constraints.height);
    const isFullScreen = isFullWidth && isFullHeight;

    const setFullScreen = () => {
        setupSize(constraints);
        setupPosition({x: 0, y: 0});
    };
    const setSmallScreen = () => {
        const {size, position} = getDefaultRect();
        setupSize(size);
        setupPosition(position);
    };

    const showWindow = window.isOpened && !window.isMinimized;

    return showWindow ? (
        <Window
            title={window.title}
            image={window.image}
            root={root}
            active={isActive}
            onMouseDown={onMouseDown}
            onMinimize={setMinimized}
            onClose={setClosed}
            draggable
            initialPosition={window.position}
            onDragStop={setupPosition}
            resizable
            initialSize={window.size}
            onResizeStop={onResizeStop}
            fullscreen={isFullScreen}
            onFullScreen={setFullScreen}
            onSmallScreen={setSmallScreen}
            style={{zIndex: index}}
        >
            {content}
        </Window>
    ) : null;
};
