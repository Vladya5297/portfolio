import {fetcher} from '~/utils/fetcher';

import {listener} from '../listener';

import {clippyActions} from './actions';

type Data = {
    setup: string;
    delivery: string;
};

listener.startListening({
    actionCreator: clippyActions.getMessageInit,
    effect: async (_, {dispatch, signal, delay, cancelActiveListeners}) => {
        cancelActiveListeners();

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
