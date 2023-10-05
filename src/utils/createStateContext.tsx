import type {DependencyList, ReactNode} from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

import {noop} from './toolkit';

type Props = {
    children: ReactNode;
};

export function createStateContext<T>(initial: T) {
    const GetStateContext = createContext<T>(initial);
    const SetStateContext = createContext(noop);

    const Provider = ({children}: Props) => {
        const [state, setState] = useState(initial);

        return (
            <SetStateContext.Provider value={setState}>
                <GetStateContext.Provider value={state}>
                    {children}
                </GetStateContext.Provider>
            </SetStateContext.Provider>
        );
    };

    const useSet = (value: T, deps: DependencyList = []) => {
        const setState = useContext(SetStateContext);

        useEffect(() => {
            setState(value);
        }, deps);
    };

    const useGet = () => {
        const state = useContext(GetStateContext);

        return state;
    };

    return {
        Provider,
        useSet,
        useGet,
    };
}
