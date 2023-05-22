import {useSelector} from 'react-redux';

import {Button} from '~/components/Button';
import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import {selectActiveWindowId, selectOpenedWindows, selectWindow} from '~/page/state/windows/selectors';
import type {WindowId} from '~/page/state/windows/types';
import type {State} from '~/page/state/types';

import css from './style.m.css';

type Props = {
    windowId: WindowId;
};

const Item = ({windowId}: Props) => {
    const window = useSelector((state: State) => selectWindow(state, windowId))!;
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const setMaximized = useAction(() => windowsSlice.actions.setMaximized(windowId));
    const setMinimized = useAction(() => windowsSlice.actions.setMinimized(windowId));
    const setActive = useAction(() => windowsSlice.actions.setActive(windowId));

    const onClick = () => {
        if (isActive) {
            setMinimized();
            return;
        }

        if (window.isMinimized) {
            setMaximized();
            return;
        }

        setActive();
    };

    return (
        <Button className={css.item} active={isActive} onClick={onClick}>
            <img src={window.image} alt="" width={16} height={16} />

            <span className={css.label}>{window.title}</span>
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
