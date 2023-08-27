import {useSelector} from 'react-redux';
import cn from 'classnames';

import {useBreakpoint} from '~/components/Breakpoint/useBreakpoint';
import {selectOpenedWindows} from '~/page/state/windows';
import {Clock} from '~/page/applications/clock';

import {Item} from './components/Item';
import css from './style.m.css';

export const Footer = () => {
    const windowIds = useSelector(selectOpenedWindows);

    const isMobile = useBreakpoint({to: 's'});
    const size = isMobile ? 'm' : 's';

    return (
        <footer className={cn(css.footer, css[`size-${size}`])}>
            {windowIds.map(windowId => (
                <Item
                    key={windowId}
                    windowId={windowId}
                    isMobile={isMobile}
                />
            ))}

            <Clock className={cn(css.clock, css[`clock-size-${size}`])} />
        </footer>
    );
};
