import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';
import {listener} from './listener';

export const state = configureStore({
    reducer: {
        windows: windowsSlice.reducer,
    },
    middleware: gdm => gdm().prepend(listener.middleware),
});
