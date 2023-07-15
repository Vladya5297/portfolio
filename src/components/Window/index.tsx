import {createPortal} from 'react-dom';

import {View} from './View';
import type {ViewProps} from './View';
import {Movable} from './Movable';
import type {MovableProps} from './Movable';

type Props = MovableProps & Omit<ViewProps, keyof MovableProps>;

export const Window = ({
    root,
    draggable,
    initialPosition,
    resizable,
    initialSize,
    style,
    children,
    onMouseDown,
    onMouseUp,
    onDragStop,
    onResizeStop,
    ...props
}: Props) => {
    return createPortal(
        <Movable
            draggable={draggable}
            initialPosition={initialPosition}
            resizable={resizable}
            initialSize={initialSize}
            style={style}
            root={root}
            onDragStop={onDragStop}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onResizeStop={onResizeStop}
        >
            <View {...props}>
                {children}
            </View>
        </Movable>,
        root,
    );
};
