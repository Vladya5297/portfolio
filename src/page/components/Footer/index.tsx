import {useSelector} from 'react-redux';

import {Button} from '~/components/Button';
import {useAction} from '~/utils/redux/useAction';
import {
    windowsActions,
    selectActiveWindowId,
    selectOpenedWindows,
    selectWindow,
} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import type {State} from '~/page/state/types';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/toolkit';

import css from './style.m.css';

type Props = {
    windowId: WindowId;
};

const Item = ({windowId}: Props) => {
    const window = useSelectorMapper(
        (state: State) => selectWindow(state, windowId),
        value => pick(value, ['image', 'title']),
    );
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const toggleWindow = useAction(() => windowsActions.toggle(windowId));

    return (
        <Button className={css.item} active={isActive} onClick={toggleWindow}>
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
