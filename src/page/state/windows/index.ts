import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {defaultPosition} from './constants';
import type {Window, WindowId, WindowsState} from './types';

const windowAdapter = createEntityAdapter<Window>();
const collection = windowAdapter.getInitialState();

const initialState: WindowsState = {
    active: null,
    queue: [],
    ...collection,
};

export const windowsSlice = createSlice({
    name: 'windows',
    initialState,
    reducers: {
        addWindow(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            state.active = windowId;
            state.queue.push(windowId);

            windowAdapter.addOne(state, {
                id: windowId,
                isMinimized: false,
                isOpened: true,
                position: defaultPosition,
            });
        },
        setActive(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            state.active = windowId;

            const index = state.queue.indexOf(windowId);

            if (index !== -1) {
                state.queue.splice(index, 1);
            }

            state.queue.push(windowId);
        },
        setMinimized(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {isMinimized: true},
            });

            const index = state.queue.indexOf(windowId);

            if (index !== -1) {
                state.queue.splice(index, 1);
            }

            const previous = state.queue.at(-1);
            state.active = previous || null;
        },
        setMaximized(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {isMinimized: false},
            });

            state.queue.push(windowId);
        },
    },
});
