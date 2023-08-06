import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {
    AddWindowPayload,
    SetupPositionPayload,
    SetupSizePayload,
    Size,
    Window,
    WindowId,
    WindowsState,
} from './types';
import {removeFromQueue, updateActive} from './utils';
import {STATE_ID} from './constants';

export const windowAdapter = createEntityAdapter<Window>();
const collection = windowAdapter.getInitialState();

const initialState: WindowsState = {
    active: null,
    queue: [],
    constraints: {
        width: 0,
        height: 0,
    },
    ...collection,
};

export const windowsSlice = createSlice({
    name: STATE_ID,
    initialState,
    reducers: {
        addWindow(state, action: PayloadAction<AddWindowPayload>) {
            const {
                id: windowId,
                title,
                image,
                defaultPosition,
                defaultSize,
            } = action.payload;

            windowAdapter.addOne(state, {
                id: windowId,
                title,
                image,
                isMinimized: false,
                isOpened: false,
                position: defaultPosition,
                size: defaultSize,
                defaultPosition,
                defaultSize,
            });
        },
        setActive(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;
            updateActive(state, windowId);

            removeFromQueue(state, windowId);
            state.queue.push(windowId);
        },
        setMinimized(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {isMinimized: true},
            });

            removeFromQueue(state, windowId);
            updateActive(state);
        },
        setMaximized(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {isMinimized: false},
            });

            state.queue.push(windowId);
            updateActive(state, windowId);
        },
        setOpened(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {
                    isMinimized: false,
                    isOpened: true,
                },
            });

            state.queue.push(windowId);
            updateActive(state, windowId);
        },
        setClosed(state, action: PayloadAction<WindowId>) {
            const windowId = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {
                    isOpened: false,
                },
            });

            removeFromQueue(state, windowId);
            updateActive(state);
        },
        setPosition(state, action: PayloadAction<SetupPositionPayload>) {
            const {id: windowId, position} = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {position},
            });
        },
        setSize(state, action: PayloadAction<SetupSizePayload>) {
            const {id: windowId, size} = action.payload;

            windowAdapter.updateOne(state, {
                id: windowId,
                changes: {size},
            });
        },
        setConstraints(state, action: PayloadAction<Size>) {
            state.constraints = action.payload;
        },
    },
});
