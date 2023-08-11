import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import {onKeyDown} from '~/utils/dom';
import {useAction} from '~/utils/redux/useAction';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import {selectActiveWindowId, windowsActions} from '../state/windows';

export const useWindowsControls = () => {
    const activeWindowId = useSelector(selectActiveWindowId);
    const close = useAction(windowsActions.setClosed);

    useEffect(() => {
        if (!activeWindowId) return;

        const unsubscribe = onKeyDown(KEYBOARD_KEY.ESC, () => close(activeWindowId));

        return unsubscribe;
    }, [activeWindowId]);
};
