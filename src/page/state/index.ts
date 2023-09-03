import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';
import {listener} from './listener';
import {paramsSlice} from './params';
import {clippySlice} from './clippy';
import {wallpapersSlice} from './wallpapers';

export const state = configureStore({
    reducer: {
        params: paramsSlice.reducer,
        windows: windowsSlice.reducer,
        clippy: clippySlice.reducer,
        wallpapers: wallpapersSlice.reducer,
    },
    middleware: gdm => gdm().prepend(listener.middleware),
});
