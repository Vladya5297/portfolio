import {createPortal} from 'react-dom';

import {View} from './View';
import type {ViewProps} from './View';
import {Draggable} from './Draggable';
import type {DraggableProps} from './Draggable';
import {Resizable} from './Resizable';
import type {ResizableProps} from './Resizable';

type Props = ViewProps
& Omit<DraggableProps, 'children'>
& Omit<ResizableProps, 'children'>;

export const Window = ({
    root,
    draggable,
    initialPosition,
    resizeable,
    initialSize,
    children,
    onDragStart,
    onDragStop,
    onMouseDown,
    onResizeStop,
    ...props
}: Props) => {
    return createPortal(
        <Draggable
            root={root}
            initialPosition={initialPosition}
            draggable={draggable}
            onDragStart={onDragStart}
            onDragStop={onDragStop}
            onMouseDown={onMouseDown}
        >
            <Resizable
                root={root}
                initialSize={initialSize}
                resizeable={resizeable}
                onResizeStop={onResizeStop}
            >
                <View {...props}>
                    {children}
                </View>
            </Resizable>
        </Draggable>,
        root,
    );
};
