import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';
import {listener} from './listener';
import {paramsSlice} from './params';
import {clippySlice} from './clippy';

export const state = configureStore({
    reducer: {
        params: paramsSlice.reducer,
        windows: windowsSlice.reducer,
        clippy: clippySlice.reducer,
    },
    middleware: gdm => gdm().prepend(listener.middleware),
});
