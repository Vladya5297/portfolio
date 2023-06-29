import type {ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/redux/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {Position, Size, WindowId} from '~/page/state/windows/types';
import {selectActiveWindowId, selectQueueIndex, selectWindow} from '~/page/state/windows/selectors';
import type {State} from '~/page/state/types';
import {Window} from '~/components/Window';
import {getDefaultRect} from '~/page/state/windows/utils';

import {useRootSize} from './utils';

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

    const setMinimized = useAction(() => windowsSlice.actions.setMinimized(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));
    const setClosed = useAction(() => windowsSlice.actions.setClosed(windowId));

    const setupPosition = useAction(
        (position: Position) => windowsSlice.actions.setupPosition({id: windowId, position}),
    );
    const setupSize = useAction(
        (size: Size) => windowsSlice.actions.setupSize({id: windowId, size}),
    );
    const onResizeStop = (size: Size, position: Position) => {
        setupSize(size);
        setupPosition(position);
    };

    const rootSize = useRootSize(root);
    const isFullWidth = window.size.width === rootSize.width;
    const isFullHeight = window.size.height === rootSize.height;
    const isFullScreen = isFullWidth && isFullHeight;

    const setFullScreen = () => {
        setupSize(rootSize);
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
            onMouseDown={setActive}
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
