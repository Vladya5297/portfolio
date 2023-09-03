import {
    useFloating,
    shift,
    offset,
    autoUpdate,
} from '@floating-ui/react';
import type dayjs from 'dayjs';

import type {TextProps} from '~/components/Text';
import {Text} from '~/components/Text';

import css from './style.m.css';

type Props = {
    anchor: HTMLElement | null;
    date: dayjs.Dayjs;
    size: TextProps['size'];
};

export const Tooltip = ({
    anchor,
    date,
    size,
}: Props) => {
    const {refs, x, y, strategy} = useFloating({
        elements: {reference: anchor},
        placement: 'top',
        strategy: 'fixed',
        transform: false,
        whileElementsMounted: autoUpdate,
        middleware: [
            shift(),
            offset({mainAxis: 6, crossAxis: -2}),
        ],
    });

    return (
        <div
            ref={refs.setFloating}
            className={css.tooltip}
            style={{
                position: strategy,
                left: x,
                top: y,
            }}
        >
            <Text
                color="secondary"
                size={size}
            >
                {date.format('ddd, D MMM YYYY, HH:mm')}
            </Text>
        </div>
    );
};
