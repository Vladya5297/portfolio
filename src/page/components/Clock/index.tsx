import {useState} from 'react';
import dayjs from 'dayjs';
import cn from 'classnames';

import {useInterval} from '~/utils/useInterval';
import {useClickOutside} from '~/utils/useClickOutside';
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

    useInterval(() => {
        setDate(dayjs());
    }, 1000);

    useClickOutside(anchor, () => {
        setIsTooltipOpen(false);
    });

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
                ref={setAnchor}
                onClick={onClick}
            >
                <Text size={size}>
                    {date.format('HH:mm')}
                </Text>
            </button>

            {isTooltipOpen ? (
                <Tooltip
                    date={date}
                    anchor={anchor}
                    size={size}
                />
            ) : null}
        </>
    );
};
