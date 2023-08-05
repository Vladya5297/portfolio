import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';
import {listener} from './listener';
import {paramsSlice} from './params';

export const state = configureStore({
    reducer: {
        params: paramsSlice.reducer,
        windows: windowsSlice.reducer,
    },
    middleware: gdm => gdm().prepend(listener.middleware),
});
