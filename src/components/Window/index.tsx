import {useCallback} from 'react';
import {createPortal} from 'react-dom';
import Draggable from 'react-draggable';
import type {DraggableEventHandler} from 'react-draggable';

import {View} from './View';
import type {ViewProps} from './View';
import css from './style.css';

type Position = {
    x: number;
    y: number;
};

type CustomProps = {
    root?: HTMLElement;
    position?: Position;
    onDragStart?: (position: Position) => void;
    onDragStop?: (position: Position) => void;
    onMouseDown?: (event: MouseEvent) => void;
};

type Props = CustomProps & Omit<ViewProps, keyof CustomProps>;

export const Window = ({
    root = document.body,
    position,
    children,
    onDragStart,
    onDragStop,
    onMouseDown,
    ...props
}: Props) => {
    const onStart: DraggableEventHandler = useCallback((_, {x, y}) => {
        onDragStart?.({x, y});
    }, [onDragStart]);

    const onStop: DraggableEventHandler = useCallback((_, {x, y}) => {
        onDragStop?.({x, y});
    }, [onDragStop]);

    return createPortal(
        <Draggable
            handle={`.${css.title}`}
            defaultClassNameDragging={css.dragging}
            bounds="parent"
            offsetParent={root}
            defaultPosition={position}
            onStart={onStart}
            onStop={onStop}
            onMouseDown={onMouseDown}
        >
            <View {...props}>
                {children}
            </View>
        </Draggable>,
        root,
    );
};
