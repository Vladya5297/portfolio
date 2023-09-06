import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {STATUS} from '~/constants/status';

import {DEFAULT_MESSAGE, ERROR_MESSAGE, STATE_ID} from './constants';
import type {ClippyAnimation, ClippyMessage, ClippyState} from './types';

const initialState: ClippyState = {
    visible: true,
    message: {
        value: DEFAULT_MESSAGE,
        status: STATUS.DONE,
        visible: true,
    },
    animation: {
        src: '',
        duration: 0,
    },
};

export const clippySlice = createSlice({
    name: STATE_ID,
    initialState,
    reducers: {
        getMessageInit(state) {
            state.message.status = STATUS.PENDING;
            state.message.visible = true;
        },
        getMessageDone(state, {payload}: PayloadAction<string>) {
            state.message.status = STATUS.DONE;
            state.message.value = payload;
        },
        getMessageFail(state) {
            state.message.status = STATUS.FAILED;
            state.message.value = ERROR_MESSAGE;
        },
        setIsVisible(state, {payload}: PayloadAction<boolean>) {
            state.visible = payload;
        },
        setMessage(state, {payload}: PayloadAction<Partial<ClippyMessage>>) {
            state.message = {...state.message, ...payload};
        },
        setAnimation(state, {payload}: PayloadAction<ClippyAnimation>) {
            state.animation = payload;
        },
    },
});
