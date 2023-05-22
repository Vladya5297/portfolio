import {useEffect, useState} from 'react';
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
    initialPosition = {x: 0, y: 0},
    draggable,
    children,
    onDragStart,
    onDragStop,
    onMouseDown,
}: DraggableProps) => {
    const [position, setPosition] = useState<Position>(initialPosition);

    useEffect(() => {
        setPosition(initialPosition);
    }, [initialPosition]);

    const onStart: DraggableEventHandler = (_, {x, y}) => {
        onDragStart?.({x, y});
    };

    const onStop: DraggableEventHandler = (_, {x, y}) => {
        onDragStop?.({x, y});
    };

    const onResize: DraggableEventHandler = (_, {x, y}) => {
        setPosition({x, y});
    };

    return (
        <DraggableBase
            handle={`.${css.title}`}
            bounds="parent"
            offsetParent={root}
            position={position}
            disabled={!draggable}
            onStart={onStart}
            onStop={onStop}
            onDrag={onResize}
            onMouseDown={onMouseDown}
        >
            {children}
        </DraggableBase>
    );
};
