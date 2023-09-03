import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {WallpapersState, WallpapersValue} from './types';
import {STATE_ID} from './constants';
import {getInitialValue, setBackground} from './utils';

const initialValue = getInitialValue();
setBackground(initialValue);

const initialState: WallpapersState = {
    isOpened: false,
    value: initialValue,
};

export const wallpapersSlice = createSlice({
    name: STATE_ID,
    initialState,
    reducers: {
        setIsOpened(state, action: PayloadAction<boolean>) {
            state.isOpened = action.payload;
        },
        setValue(state, action: PayloadAction<WallpapersValue>) {
            state.value = action.payload;
        },
    },
});
