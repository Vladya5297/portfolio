import {useCallback, useEffect, useRef} from 'react';
import type {ReactNode} from 'react';
import {Rnd} from 'react-rnd';
import type {RndDragCallback, RndResizeCallback} from 'react-rnd';
import cn from 'classnames';

import type {Size, Position} from './types';
import css from './style.m.css';

export type MovableProps = {
    draggable?: boolean;
    resizable?: boolean;
    initialPosition?: Position;
    initialSize?: Size;
    children: ReactNode;
    root: HTMLElement;
    onMouseDown?: (e: MouseEvent) => void;
    onMouseUp?: (e: MouseEvent) => void;
    onResizeStop?: (size: Size, position: Position) => void;
    onDragStop?: (position: Position) => void;
};

export const Movable = ({
    draggable = false,
    resizable = false,
    initialPosition = {x: 0, y: 0},
    initialSize = {width: 0, height: 0},
    children,
    root,
    onMouseDown,
    onMouseUp,
    onResizeStop,
    onDragStop,
}: MovableProps) => {
    const ref = useRef<Rnd>(null);
    const {x, y} = initialPosition;
    const {width, height} = initialSize;

    useEffect(() => {
        if (!ref.current) return;
        ref.current.updatePosition(initialPosition);
    }, [x, y]);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.updateSize(initialSize);
    }, [width, height]);

    const onDragStopHandler: RndDragCallback = useCallback((e, data) => {
        onDragStop?.({x: data.x, y: data.y});
    }, [onDragStop]);

    const onResizeStopHandler: RndResizeCallback = useCallback((e, dir, elem, delta, position) => {
        const rect = elem.getBoundingClientRect();
        onResizeStop?.({width: rect.width, height: rect.height}, position);
    }, [onResizeStop]);

    return (
        <Rnd
            ref={ref}
            bounds={root}
            disableDragging={!draggable}
            enableResizing={resizable}
            minWidth={200}
            minHeight={100}
            default={{x, y, width, height}}
            dragHandleClassName={css.title}
            resizeHandleStyles={{
                top: {cursor: 'n-resize'},
                bottom: {cursor: 's-resize'},
                left: {cursor: 'w-resize'},
                right: {cursor: 'e-resize'},
            }}
            className={cn(draggable && css.draggable)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onDragStop={onDragStopHandler}
            onResizeStop={onResizeStopHandler}
        >
            {children}
        </Rnd>
    );
};
