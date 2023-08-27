import {
    useFloating,
    shift,
    offset,
} from '@floating-ui/react';
import type dayjs from 'dayjs';

import css from './style.m.css';

type Props = {
    anchor: HTMLElement | null;
    date: dayjs.Dayjs;
    isOpen: boolean;
};

export const Tooltip = ({
    anchor,
    date,
    isOpen,
}: Props) => {
    const {refs, x, y, strategy} = useFloating({
        elements: {reference: anchor},
        placement: 'top',
        strategy: 'fixed',
        transform: false,
        open: isOpen,
        middleware: [
            shift(),
            offset({mainAxis: 6, crossAxis: -2}),
        ],
    });

    return isOpen ? (
        <div
            ref={refs.setFloating}
            className={css.tooltip}
            style={{
                position: strategy,
                left: x,
                top: y,
            }}
        >
            {date.format('ddd, D MMM YYYY, HH:mm')}
        </div>
    ) : null;
};
