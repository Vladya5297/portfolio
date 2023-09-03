import {useSelector} from 'react-redux';
import cn from 'classnames';

import {useBreakpoint} from '~/components/Breakpoint';
import {SIZE} from '~/constants/size';
import {selectOpenWindows} from '~/page/state/windows';
import {Clock} from '~/page/components/Clock';

import {Start} from '../Start';

import {Item} from './components/Item';
import css from './style.m.css';

export const Footer = () => {
    const windowIds = useSelector(selectOpenWindows);

    const isMobile = useBreakpoint({to: 's'});
    const size = isMobile ? SIZE.M : SIZE.S;

    return (
        <footer className={cn(css.footer, css[`size-${size}`])}>
            <Start />

            {windowIds.map(windowId => (
                <Item
                    key={windowId}
                    windowId={windowId}
                    isMobile={isMobile}
                />
            ))}

            <Clock className={css.clock} />
        </footer>
    );
};
