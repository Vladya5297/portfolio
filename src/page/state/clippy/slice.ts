import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {STATUS} from '~/constants/status';

import {DEFAULT_MESSAGE, ERROR_MESSAGE, STATE_ID} from './constants';
import type {ClippyState} from './types';

const initialState: ClippyState = {
    visible: true,
    message: {
        value: DEFAULT_MESSAGE,
        status: STATUS.DONE,
    },
};

export const clippySlice = createSlice({
    name: STATE_ID,
    initialState,
    reducers: {
        getMessageInit(state) {
            state.message.status = STATUS.PENDING;
        },
        getMessageDone(state, action: PayloadAction<string>) {
            state.message.status = STATUS.DONE;
            state.message.value = action.payload;
        },
        getMessageFail(state) {
            state.message.status = STATUS.FAILED;
            state.message.value = ERROR_MESSAGE;
        },
    },
});
