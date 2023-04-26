import type {AnyAction} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

export const useAction = (actionCreator: () => AnyAction) => {
    const dispatch = useDispatch();

    return useCallback(() => {
        const action = actionCreator();
        dispatch(action);
    }, []);
};
