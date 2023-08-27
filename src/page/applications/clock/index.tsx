import {useState} from 'react';
import dayjs from 'dayjs';
import cn from 'classnames';

import {useInterval} from '~/utils/useInterval';
import {useClickOutside} from '~/utils/useClickOutside';
import {CSS_GLOBAL_CLASS} from '~/components/styles';

import {Tooltip} from './components/Tooltip';
import css from './style.m.css';

type Props = {
    className?: string;
};

export const Clock = ({className}: Props) => {
    const [date, setDate] = useState(dayjs);

    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    useInterval(() => {
        setDate(dayjs());
    }, 1000);

    useClickOutside({current: anchor}, () => {
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
        <button
            className={clockClassName}
            ref={setAnchor}
            onClick={onClick}
        >
            <Tooltip
                date={date}
                anchor={anchor}
                isOpen={isTooltipOpen}
            />

            {date.format('HH:mm')}
        </button>
    );
};
