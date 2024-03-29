import {isAnyOf} from '@reduxjs/toolkit';

import {INTRO_ID} from '~/page/applications/intro/constants';

import {listener} from '../listener';
import {paramsActions} from '../params';
import {selectWindowIdParam} from '../params/selectors';

import {selectWindow, selectActiveWindowId, selectIsWindowActive} from './selectors';
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

        if (window.isOpen) {
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
        const isActive = selectIsWindowActive(state, windowId);

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

// Show introduction window
listener.startListening({
    actionCreator: windowsActions.addWindow,
    effect: ({payload}, {dispatch}) => {
        const {id} = payload;
        const wasShown = window.localStorage.getItem('intro');

        if (id === INTRO_ID && !wasShown) {
            dispatch(windowsActions.setOpened(id));
            window.localStorage.setItem('intro', 'true');
        }
    },
});
