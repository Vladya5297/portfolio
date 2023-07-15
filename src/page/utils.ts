import type {RefObject} from 'react';
import {useEffect} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {searchParams} from '~/utils/searchParams';

import {windowsActions} from './state/windows';
import type {WindowId} from './state/windows';

export const useInitWindow = (rootRef: RefObject<HTMLElement>): void => {
    const setOpened = useAction(windowsActions.setOpened);
    const setupSize = useAction(windowsActions.setupSize);
    const setupPosition = useAction(windowsActions.setupPosition);

    useEffect(() => {
        const windowId = searchParams.get<WindowId>('window');

        if (windowId && rootRef.current) {
            const {width, height} = rootRef.current.getBoundingClientRect();
            setOpened(windowId);
            setupSize({id: windowId, size: {width, height}});
            setupPosition({id: windowId, position: {x: 0, y: 0}});
        }
    }, []);
};
