import {fetcher} from '~/utils/fetcher';

import {listener} from '../listener';

import {clippyActions} from './actions';

type Data = {
    id: string;
    joke: string;
    status: number;
};

listener.startListening({
    actionCreator: clippyActions.getMessageInit,
    effect: async (_, {dispatch, signal}) => {
        const headers = new Headers({
            'user-agent': 'My Library (https://vladya5297.github.io/portfolio/)',
            accept: 'application/json',
        });

        await fetcher<Data>('https://icanhazdadjoke.com/', {
            format: 'json',
            method: 'GET',
            headers,
            signal,
        })
            .then(({joke}) => {
                dispatch(clippyActions.getMessageDone(joke));
            })
            .catch(error => {
                dispatch(clippyActions.getMessageFail(error));
            });
    },
});
