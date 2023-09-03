import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import {useBreakpoint} from '~/components/Breakpoint';
import {selectIsWindowActive, windowsActions} from '~/page/state/windows';
import type {State} from '~/page/state/types';
import {useAction} from '~/utils/redux/useAction';
import {onKeyDown} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import {DesktopWindow} from './DesktopWindow';
import {MobileWindow} from './MobileWindow';
import type {WindowProps} from './types';

export const Window = (props: WindowProps) => {
    const isMobile = useBreakpoint({to: 's'});

    const isActive = useSelector((state: State) => selectIsWindowActive(state, props.id));
    const close = useAction(() => windowsActions.setClosed(props.id));

    /** Windows keyboard control */
    useEffect(() => {
        if (!isActive) return;
        return onKeyDown(KEYBOARD_KEY.ESC, close);
    }, [isActive]);

    return isMobile
        ? <MobileWindow {...props} />
        : <DesktopWindow {...props} />;
};
