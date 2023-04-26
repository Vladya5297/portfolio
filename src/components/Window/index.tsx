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

type Props = {
    root?: HTMLElement;
    position?: Position;
    onDragStop?: (position: Position) => void;
} & ViewProps;

export const Window = ({
    root = document.body,
    position,
    children,
    onDragStop,
    ...props
}: Props) => {
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
            onStop={onStop}
        >
            <View {...props}>
                {children}
            </View>
        </Draggable>,
        root,
    );
};
