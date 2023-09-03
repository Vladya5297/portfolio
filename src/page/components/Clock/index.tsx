import {useCallback, useState} from 'react';
import dayjs from 'dayjs';
import cn from 'classnames';

import {useInterval} from '~/utils/useInterval';
import {SIZE} from '~/constants/size';
import {CSS_GLOBAL_CLASS} from '~/components/styles';
import {Text} from '~/components/Text';
import {useBreakpoint} from '~/components/Breakpoint';

import {Tooltip} from './Tooltip';
import css from './style.m.css';

type Props = {
    className?: string;
};

export const Clock = ({className}: Props) => {
    const isMobile = useBreakpoint({to: 's'});
    const size = isMobile ? SIZE.M : SIZE.S;

    const [date, setDate] = useState(dayjs);

    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const update = useCallback(() => setDate(dayjs()), []);
    useInterval(update, 1000);

    const close = useCallback(() => {
        setIsTooltipOpen(false);
    }, []);

    const onClick = () => {
        setIsTooltipOpen(value => !value);
    };

    const clockClassName = cn(
        CSS_GLOBAL_CLASS.BORDER_INSET,
        css.clock,
        className,
    );

    return (
        <>
            <button
                className={clockClassName}
                onClick={onClick}
                ref={setAnchor}
            >
                <Text size={size}>
                    {date.format('HH:mm')}
                </Text>
            </button>

            {isTooltipOpen ? (
                <Tooltip
                    date={date}
                    anchor={anchor}
                    close={close}
                    size={size}
                />
            ) : null}
        </>
    );
};
