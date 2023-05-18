import {useCallback} from 'react';
import type {ReactNode} from 'react';
import DraggableBase from 'react-draggable';
import type {DraggableEventHandler} from 'react-draggable';

import type {Position} from './types';
import css from './style.m.css';

export type DraggableProps = {
    root: HTMLElement;
    children: ReactNode;
    initialPosition?: Position;
    draggable?: boolean;
    onDragStart?: (position: Position) => void;
    onDragStop?: (position: Position) => void;
    onMouseDown?: (event: MouseEvent) => void;
};

export const Draggable = ({
    root,
    initialPosition,
    draggable,
    children,
    onDragStart,
    onDragStop,
    onMouseDown,
}: DraggableProps) => {
    const onStart: DraggableEventHandler = useCallback((_, {x, y}) => {
        onDragStart?.({x, y});
    }, [onDragStart]);

    const onStop: DraggableEventHandler = useCallback((_, {x, y}) => {
        onDragStop?.({x, y});
    }, [onDragStop]);

    return (
        <DraggableBase
            handle={`.${css.header}`}
            defaultClassNameDragging={css.dragging}
            bounds="parent"
            offsetParent={root}
            defaultPosition={initialPosition}
            disabled={!draggable}
            onStart={onStart}
            onStop={onStop}
            onMouseDown={onMouseDown}
        >
            {children}
        </DraggableBase>
    );
};
