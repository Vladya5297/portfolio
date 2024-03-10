import type {WindowId} from '~/page/state/windows';
import {windowsActions} from '~/page/state/windows';
import {useAction} from '~/utils/redux/useAction';

import {Shortcut as ShortcutBase} from '../Shortcut';
import type {ShortcutProps} from '../Shortcut/types';

type Props = {
    id: WindowId;
} & ShortcutProps;

export const Shortcut = ({id, onClick, ...props}: Props) => {
    const openWindow = useAction(() => windowsActions.open(id));

    const clickHandler = onClick || openWindow;

    return (
        <ShortcutBase
            {...props}
            onClick={clickHandler}
        />
    );
};
