import {isAnyOf} from '@reduxjs/toolkit';

import {fetcher} from '~/utils/fetcher';
import {STATUS} from '~/constants/status';

import {listener} from '../listener';
import {windowsActions} from '../windows';

import {clippyActions} from './actions';
import {WINDOWS_MESSAGES} from './constants';

type Data = {
    setup: string;
    delivery: string;
};

listener.startListening({
    matcher: isAnyOf(clippyActions.getMessageInit, windowsActions.open),
    effect: async (
        action,
        {dispatch, signal, delay, cancelActiveListeners},
    ) => {
        cancelActiveListeners();

        // If window is opened - show related message
        if (windowsActions.open.match(action)) {
            const windowId = action.payload;
            dispatch(clippyActions.setMessage({
                status: STATUS.DONE,
                visible: true,
                value: WINDOWS_MESSAGES[windowId],
            }));
            return;
        }

        // https://jokeapi.dev/#rate-limiting
        await delay(1000);

        await fetcher<Data>('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart&lang=en', {
            format: 'json',
            method: 'GET',
            signal,
        })
            .then(({setup, delivery}) => {
                dispatch(clippyActions.getMessageDone(`${setup} ${delivery}`));
            })
            .catch(error => {
                dispatch(clippyActions.getMessageFail(error));
            });
    },
});
