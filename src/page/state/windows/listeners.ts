import {listener} from '../listener';

import {selectWindow, selectActiveWindowId} from './selectors';
import {windowsActions} from './actions';

listener.startListening({
    actionCreator: windowsActions.open,
    effect: ({payload: windowId}, {getState, dispatch}) => {
        const state = getState();
        const window = selectWindow(state, windowId);

        if (window.isMinimized) {
            dispatch(windowsActions.setMaximized(windowId));
            return;
        }

        if (window.isOpened) {
            dispatch(windowsActions.setActive(windowId));
            return;
        }

        dispatch(windowsActions.setOpened(windowId));
    },
});

listener.startListening({
    actionCreator: windowsActions.toggle,
    effect: ({payload: windowId}, {getState, dispatch}) => {
        const state = getState();

        const window = selectWindow(state, windowId);
        const activeWindowId = selectActiveWindowId(state);
        const isActive = activeWindowId === windowId;

        if (isActive) {
            dispatch(windowsActions.setMinimized(windowId));
            return;
        }

        if (window.isMinimized) {
            dispatch(windowsActions.setMaximized(windowId));
            return;
        }

        dispatch(windowsActions.setActive(windowId));
    },
});
