import React, {useCallback, useRef, useState} from 'react';
import type {ReactElement, CSSProperties, SyntheticEvent} from 'react';
import cn from 'classnames';
import type {ResizeCallbackData} from 'react-resizable';
import {Resizable as ResizableBase} from 'react-resizable';
import 'react-resizable/css/styles.css';

import type {Size} from './types';

export type ResizableProps = {
    root: HTMLElement;
    initialSize?: Size;
    children: ReactElement;
    resizeable?: boolean;
    className?: string;
    style?: CSSProperties;
    onResizeStop?: (size: Size) => void;
};

export const Resizable = ({
    root,
    initialSize = {width: 0, height: 0},
    resizeable,
    children,
    onResizeStop,
    style,
    className,
    ...props
}: ResizableProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [size, setSize] = useState(initialSize);

    const onResize = useCallback((_: SyntheticEvent, data: ResizeCallbackData) => {
        const self = ref.current;
        if (!self) return;

        const selfRect = self.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();

        const {width, height} = data.size;

        const maxWidth = rootRect.right - selfRect.left;
        const maxHeight = rootRect.bottom - selfRect.top;

        if (width > maxWidth || height > maxHeight) return;

        setSize({width, height});
    }, [root]);

    const onStop = useCallback((_: SyntheticEvent, data: ResizeCallbackData) => {
        onResizeStop?.(data.size);
    }, [onResizeStop]);

    const element = React.Children.only(children);

    const childClassName = cn(
        className,
        element.props.className,
    );

    const childStyle = {
        ...style,
        ...element.props.style,
        width: `${size.width}px`,
        height: `${size.height}px`,
    };

    return (
        <ResizableBase
            {...props}
            width={size.width}
            height={size.height}
            axis="both"
            resizeHandles={resizeable ? ['se'] : []}
            onResizeStop={onStop}
            onResize={onResize}
        >
            {React.cloneElement(element, {
                className: childClassName,
                style: childStyle,
                ref,
            })}
        </ResizableBase>
    );
};
