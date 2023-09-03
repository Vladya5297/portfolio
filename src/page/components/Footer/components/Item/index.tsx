import {useSelector} from 'react-redux';

import {Button} from '~/components/Button';
import {Icon} from '~/components/Icon';
import {Text} from '~/components/Text';
import {useAction} from '~/utils/redux/useAction';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/toolkit';
import {SIZE} from '~/constants/size';
import {
    windowsActions,
    selectActiveWindowId,
    selectWindow,
} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import type {State} from '~/page/state/types';

import css from './style.m.css';

type Props = {
    windowId: WindowId;
    isMobile: boolean;
};

export const Item = ({windowId, isMobile}: Props) => {
    const size = isMobile ? SIZE.M : SIZE.S;

    const window = useSelectorMapper(
        (state: State) => selectWindow(state, windowId),
        value => pick(value, ['image', 'title']),
    );
    const activeWindowId = useSelector(selectActiveWindowId);
    const isActive = activeWindowId === windowId;

    const toggleWindow = useAction(() => windowsActions.toggle(windowId));

    return (
        <Button
            className={css.item}
            active={isActive}
            onClick={toggleWindow}
        >
            <Icon src={window.image} alt="logo" size={size.next()} />

            <Text size={size} className={css.label}>{window.title}</Text>
        </Button>
    );
};
