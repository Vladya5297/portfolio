import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {useAction} from '~/utils/redux/useAction';
import {
    windowsActions,
    selectQueueIndex,
    selectWindow,
    selectWindowConstraints,
    selectIsWindowActive,
} from '~/page/state/windows';
import type {Position, Size} from '~/page/state/windows';
import type {State} from '~/page/state/types';

import type {WindowProps} from './types';

export const DesktopWindow = ({
    id: windowId,
    root,
    content,
    draggable,
    resizeable,
    lockAspectRatio,
    disableFullscreen,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
}: WindowProps) => {
    const window = useSelector((state: State) => selectWindow(state, windowId));
    const isActive = useSelector((state: State) => selectIsWindowActive(state, windowId));

    const index = useSelector((state: State) => selectQueueIndex(state, windowId));

    const setMinimized = useAction(() => windowsActions.setMinimized(windowId));
    const setActive = useAction(() => windowsActions.setActive(windowId));
    const setClosed = useAction(() => windowsActions.setClosed(windowId));

    const onMouseDown = () => {
        if (isActive) return;
        setActive();
    };

    const setPosition = useAction(
        (position: Position) => windowsActions.setPosition({id: windowId, position}),
    );
    const setSize = useAction(
        (size: Size) => windowsActions.setSize({id: windowId, size}),
    );
    const onResizeStop = (size: Size, position: Position) => {
        setSize(size);
        setPosition(position);
    };

    const constraints = useSelector(selectWindowConstraints);
    const isFullWidth = window.size.width >= Math.floor(constraints.width);
    const isFullHeight = window.size.height >= Math.floor(constraints.height);
    const isFullScreen = isFullWidth && isFullHeight;

    const setFullScreen = () => {
        setSize(constraints);
        setPosition({x: 0, y: 0});
    };
    const setSmallScreen = () => {
        setSize(window.defaultSize);
        setPosition(window.defaultPosition);
    };

    const visibility = window.isMinimized ? 'hidden' : 'visible';

    return window.isOpen ? (
        <Window
            title={window.title}
            image={window.image}
            root={root}
            active={isActive}
            onMouseDown={onMouseDown}
            onMinimize={setMinimized}
            onClose={setClosed}
            draggable={draggable ?? true}
            initialPosition={window.position}
            onDragStop={setPosition}
            resizable={resizeable ?? true}
            initialSize={window.size}
            onResizeStop={onResizeStop}
            fullscreen={isFullScreen}
            onFullScreen={disableFullscreen ? undefined : setFullScreen}
            onSmallScreen={disableFullscreen ? undefined : setSmallScreen}
            lockAspectRatio={lockAspectRatio}
            minWidth={minWidth ?? 200}
            maxWidth={maxWidth}
            minHeight={minHeight ?? 100}
            maxHeight={maxHeight}
            style={{zIndex: index, visibility}}
        >
            {content}
        </Window>
    ) : null;
};
