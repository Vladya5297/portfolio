import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {
    FloatingArrow,
    useFloating,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
} from '@floating-ui/react';

import {selectClippyMessage} from '~/page/state/clippy';

import {Message} from '../Message';

import css from './style.m.css';

type Props = {
    anchor: HTMLElement | null;
    onClick: () => void;
};

export const Tooltip = ({
    anchor,
    onClick,
}: Props) => {
    const message = useSelector(selectClippyMessage);

    const arrowRef = useRef(null);

    const {refs, x, y, strategy, context} = useFloating({
        elements: {reference: anchor},
        placement: 'top',
        transform: false,
        whileElementsMounted: autoUpdate,
        middleware: [
            flip({fallbackPlacements: ['left'], crossAxis: false}),
            shift(),
            offset({crossAxis: -10}),
            arrow({element: arrowRef, padding: 10}),
        ],
    });

    return message.visible ? (
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
            <Message {...message} />

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
