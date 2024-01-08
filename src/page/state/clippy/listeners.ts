import {isAnyOf} from '@reduxjs/toolkit';

import {fetcher} from '~/utils/fetcher';
import {STATUS} from '~/constants/status';

import {listener} from '../listener';
import {windowsActions} from '../windows';
import type {ListenerApi} from '../types';

import {clippyActions} from './actions';
import {WINDOWS_MESSAGES} from './constants';
import {getNewAnimation} from './utils';

type Data = {
    setup: string;
    punchline: string;
};

const showJoke = async ({delay, dispatch, signal}: ListenerApi) => {
    // Rate limit
    await delay(1000);

    await fetcher<Data>('https://joke.deno.dev/', {
        format: 'json',
        method: 'GET',
        signal,
    })
        .then(({setup, punchline}) => {
            dispatch(clippyActions.getMessageDone(`${setup} ${punchline}`));
        })
        .catch(error => {
            if (error.aborted) return;
            dispatch(clippyActions.getMessageFail());
        });
};

const showWindowMessage = (
    action: ReturnType<typeof windowsActions.open>,
    {dispatch}: ListenerApi,
) => {
    const windowId = action.payload;
    const message = WINDOWS_MESSAGES[windowId];

    if (message) {
        dispatch(clippyActions.setMessage({
            status: STATUS.DONE,
            visible: true,
            value: message,
        }));
    }
};

const setNewAnimation = async ({getState, dispatch}: ListenerApi) => {
    const state = getState();
    const animation = await getNewAnimation(state.clippy.animation);
    dispatch(clippyActions.setAnimation(animation));
};

listener.startListening({
    matcher: isAnyOf(clippyActions.getMessageInit, windowsActions.open),
    effect: async (
        action,
        api,
    ) => {
        // Debounce
        api.cancelActiveListeners();

        // Setting new animation
        await setNewAnimation(api);

        // If window is opened - show related message
        if (windowsActions.open.match(action)) {
            return showWindowMessage(action, api);
        }

        await showJoke(api);
    },
});
