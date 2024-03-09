import {useCallback, useSyncExternalStore} from 'react';

import type {Lambda} from './types';
import {invoke} from './toolkit';

class Atom<T> {
    private value: T;
    private subscribers: Set<Lambda> = new Set();

    constructor(initial: T) {
        this.value = initial;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
        this.subscribers.forEach(invoke);
    }

    subscribe(callback: Lambda): Lambda {
        this.subscribers.add(callback);

        return () => this.unsubscribe(callback);
    }

    unsubscribe(callback: Lambda): void {
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
