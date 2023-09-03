import {useRef} from 'react';
import {
    FloatingArrow,
    useFloating,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
} from '@floating-ui/react';

import {Message} from '../Message';

import css from './style.m.css';

type Props = {
    anchor: HTMLElement | null;
    isOpen: boolean;
    onClick: () => void;
};

export const Tooltip = ({
    anchor,
    isOpen,
    onClick,
}: Props) => {
    const arrowRef = useRef(null);

    const {refs, x, y, strategy, context} = useFloating({
        elements: {reference: anchor},
        placement: 'top',
        transform: false,
        open: isOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            flip({fallbackPlacements: ['left'], crossAxis: false}),
            shift(),
            offset({crossAxis: -10}),
            arrow({element: arrowRef, padding: 10}),
        ],
    });

    return isOpen ? (
        <div
            ref={refs.setFloating}
            className={css.message}
            style={{
                position: strategy,
                left: x,
                top: y,
            }}
            onClick={onClick}
        >
            <Message />

            <FloatingArrow
                ref={arrowRef}
                context={context}
                fill="#ffffb1"
                stroke="black"
                strokeWidth={1}
            />
        </div>
    ) : null;
};
