import {useSelector} from 'react-redux';
import cn from 'classnames';

import {useBreakpoint} from '~/components/Breakpoint';
import {SIZE} from '~/constants/size';
import {selectOpenedWindows} from '~/page/state/windows';
import {Clock} from '~/page/components/Clock';

import {Item} from './components/Item';
import css from './style.m.css';

export const Footer = () => {
    const windowIds = useSelector(selectOpenedWindows);

    const isMobile = useBreakpoint({to: 's'});
    let size = SIZE.S;
    size = isMobile ? size.next() : size;

    return (
        <footer className={cn(css.footer, css[`size-${size}`])}>
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
