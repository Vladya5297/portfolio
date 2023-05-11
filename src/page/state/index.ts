import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';
import type {State} from './types';

export const state = configureStore<State>({
    reducer: {
        windows: windowsSlice.reducer,
    },
});
