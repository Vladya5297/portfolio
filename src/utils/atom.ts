import {useCallback, useSyncExternalStore} from 'react';

import type {Lambda} from './types';

type Callback<T> = (value: T) => void;

class Atom<T> {
    private value: T;
    private subscribers: Set<Callback<T>> = new Set();

    constructor(initial: T) {
        this.value = initial;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
        this.subscribers.forEach(callback => callback(value));
    }

    subscribe(callback: Callback<T>): Lambda {
        this.subscribers.add(callback);

        return () => this.unsubscribe(callback);
    }

    unsubscribe(callback: Callback<T>): void {
        this.subscribers.delete(callback);
    }
}

export const createAtom = <T>(initial: T): Atom<T> => {
    return new Atom(initial);
};

export const useAtom = <T>(atom: Atom<T>): T => {
    const subscribe = useCallback((callback: Lambda) => atom.subscribe(callback), [atom]);
    const getValue = useCallback(() => atom.getValue(), [atom]);

    return useSyncExternalStore(subscribe, getValue);
};
