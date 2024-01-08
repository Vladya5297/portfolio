import {useSelector} from 'react-redux';

import {Button} from '~/components/Button';
import {Icon} from '~/components/Icon';
import {Text} from '~/components/Text';
import {useAction} from '~/utils/redux/useAction';
import {useProxySelector} from '~/utils/redux/useProxySelector';
import {SIZE} from '~/constants/size';
import {
    windowsActions,
    selectWindow,
    selectIsWindowActive,
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

    const window = useProxySelector((state: State) => selectWindow(state, windowId));
    const isActive = useSelector((state: State) => selectIsWindowActive(state, windowId));

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
