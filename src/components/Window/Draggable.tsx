import React, {useEffect, useState} from 'react';
import type {ReactElement} from 'react';
import DraggableBase from 'react-draggable';
import type {DraggableEventHandler} from 'react-draggable';
import cn from 'classnames';

import type {Position} from './types';
import css from './style.m.css';

export type DraggableProps = {
    root: HTMLElement;
    children: ReactElement;
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
    }, [initialPosition.x, initialPosition.y]);

    const onStart: DraggableEventHandler = (_, {x, y}) => {
        onDragStart?.({x, y});
    };

    const onStop: DraggableEventHandler = (_, {x, y}) => {
        onDragStop?.({x, y});
    };

    const onResize: DraggableEventHandler = (_, {x, y}) => {
        setPosition({x, y});
    };

    const element = React.Children.only(children);

    const childClassName = cn(
        draggable && css.draggable,
        element.props.className,
    );

    return (
        <DraggableBase
            handle={`.${css.title}`}
            defaultClassName=""
            defaultClassNameDragged=""
            defaultClassNameDragging=""
            bounds="parent"
            offsetParent={root}
            position={position}
            disabled={!draggable}
            onStart={onStart}
            onStop={onStop}
            onDrag={onResize}
            onMouseDown={onMouseDown}
        >
            {React.cloneElement(element, {
                className: childClassName,
            })}
        </DraggableBase>
    );
};
