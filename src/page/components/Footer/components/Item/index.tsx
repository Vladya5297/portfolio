import {useSelector} from 'react-redux';
import cn from 'classnames';

import {Button} from '~/components/Button';
import {Icon} from '~/components/Icon';
import {useAction} from '~/utils/redux/useAction';
import {
    windowsActions,
    selectActiveWindowId,
    selectWindow,
} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import type {State} from '~/page/state/types';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/toolkit';

import css from './style.m.css';

type Props = {
    windowId: WindowId;
    isMobile: boolean;
};

export const Item = ({windowId, isMobile}: Props) => {
    const size = isMobile ? 'm' : 's';
    const imageSize = isMobile ? 'l' : 'm';

    const window = useSelectorMapper(
        (state: State) => selectWindow(state, windowId),
        value => pick(value, ['image', 'title']),
    );
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const toggleWindow = useAction(() => windowsActions.toggle(windowId));

    return (
        <Button
            className={cn(css.item, css[`size-${size}`])}
            active={isActive}
            onClick={toggleWindow}
        >
            <Icon src={window.image} alt="logo" size={imageSize} />

            <span className={css.label}>{window.title}</span>
        </Button>
    );
};
