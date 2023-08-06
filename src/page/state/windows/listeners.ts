import {isAnyOf} from '@reduxjs/toolkit';

import {listener} from '../listener';
import {paramsActions} from '../params';
import {selectWindowIdParam} from '../params/selectors';

import {selectWindow, selectActiveWindowId} from './selectors';
import {windowsActions} from './actions';

// Process window opening
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

// Process window minimization
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

// Sync active windowId with url search params
listener.startListening({
    predicate: isAnyOf(
        windowsActions.setActive,
        windowsActions.setOpened,
        windowsActions.setClosed,
        windowsActions.setMaximized,
        windowsActions.setMinimized,
    ),
    effect: (action, {getState, dispatch}) => {
        const state = getState();
        const activeWindowId = selectActiveWindowId(state);
        dispatch(paramsActions.apply({windowId: activeWindowId}));
    },
});

// Initialize active window
listener.startListening({
    actionCreator: windowsActions.addWindow,
    effect: ({payload}, {getState, dispatch}) => {
        const {id} = payload;
        const state = getState();

        const windowIdParam = selectWindowIdParam(state);

        if (id === windowIdParam) {
            dispatch(windowsActions.setOpened(id));
        }
    },
});
