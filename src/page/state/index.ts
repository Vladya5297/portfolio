import {configureStore} from '@reduxjs/toolkit';

import {windowsSlice} from './windows';

export const store = configureStore({
    reducer: {
        windows: windowsSlice.reducer,
    },
});
