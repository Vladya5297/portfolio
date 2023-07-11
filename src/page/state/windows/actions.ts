import {createAction} from '@reduxjs/toolkit';

import type {WindowId} from './types';
import {windowsSlice} from './slice';
import {STATE_ID} from './constants';

export const windowsActions = {
    ...windowsSlice.actions,
    open: createAction<WindowId>(`${STATE_ID}/open`),
    toggle: createAction<WindowId>(`${STATE_ID}/toggle`),
};
