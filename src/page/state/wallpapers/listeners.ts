import {listener} from '../listener';

import {wallpapersActions} from './actions';
import {LS_KEY} from './constants';
import {setBackground} from './utils';

listener.startListening({
    actionCreator: wallpapersActions.setValue,
    effect: ({payload}) => {
        setBackground(payload);
        localStorage.setItem(LS_KEY, JSON.stringify(payload));
    },
});
