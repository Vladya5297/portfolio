import type {AnyAction} from '@reduxjs/toolkit';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

type ActionCreator = (...params: any[]) => AnyAction;

export const useAction = <T extends ActionCreator>(actionCreator: T) => {
    const dispatch = useDispatch();

    return useCallback((...params: Parameters<T>) => {
        const action = actionCreator(...params);
        dispatch(action);
    }, []);
};
