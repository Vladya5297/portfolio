import {isNotNil} from '~/utils/toolkit';

import {listener} from '../listener';

import {paramsActions} from './actions';

// Sync state with url search params
listener.startListening({
    actionCreator: paramsActions.apply,
    effect: ({payload}) => {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams;

        Object.entries(payload).forEach(([key, value]) => {
            if (isNotNil(value)) {
                searchParams.set(key, value.toString());
            } else {
                searchParams.delete(key);
            }
        });

        window.history.replaceState(null, '', url.toString());
    },
});
