import {useSelector} from 'react-redux';
import cn from 'classnames';

import {Button} from '~/components/Button';
import {selectActiveWindowId, selectOpenedWindows, selectWindow} from '~/page/state/windows/selectors';
import type {Window, WindowId} from '~/page/state/windows/types';
import type {State} from '~/page/state/types';
import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';

import css from './style.css';

type Props = {
    windowId: WindowId;
};

const Item = ({windowId}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId)) as Window;
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const setMaximized = useAction(() => windowsSlice.actions.setMaximized(windowId));
    const setMinimized = useAction(() => windowsSlice.actions.setMinimized(windowId));

    const onClick = () => {
        if (window.isMinimized) {
            setMaximized();
        } else {
            setMinimized();
        }
    };

    const className = cn(css.item, isActive && css.active);

    return (
        <Button className={className} onClick={onClick}>
            <img src={window.image} alt="" width={16} height={16} />

            {window.title}
        </Button>
    );
};

export const Footer = () => {
    const windowIds = useSelector(selectOpenedWindows);

    return (
        <footer className={css.footer}>
            {windowIds.map(windowId => <Item key={windowId} windowId={windowId} />)}
        </footer>
    );
};
