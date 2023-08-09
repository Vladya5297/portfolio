import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import {onKeyDown} from '~/utils/dom';
import {useAction} from '~/utils/redux/useAction';

import {selectActiveWindowId, windowsActions} from '../state/windows';

export const useWindowsControls = () => {
    const activeWindowId = useSelector(selectActiveWindowId);
    const close = useAction(windowsActions.setClosed);

    useEffect(() => {
        if (!activeWindowId) return;

        const unsubscribe = onKeyDown('Escape', () => close(activeWindowId));

        return unsubscribe;
    }, [activeWindowId]);
};
