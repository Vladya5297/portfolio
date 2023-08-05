import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {isNotNil} from '~/utils/toolkit';

import type {ApplyPayload, ParamsState} from './types';
import {STATE_ID} from './constants';

const initialState = Object.fromEntries(
    new URLSearchParams(window.location.search),
) as ParamsState;

export const paramsSlice = createSlice({
    name: STATE_ID,
    initialState,
    reducers: {
        apply(state, action: PayloadAction<ApplyPayload>) {
            const params = action.payload;

            Object.entries(params).forEach(([key, value]) => {
                const param = key as keyof ParamsState;

                if (isNotNil(value)) {
                    state[param] = value.toString();
                } else {
                    state[param] = undefined;
                }
            });
        },
    },
});
