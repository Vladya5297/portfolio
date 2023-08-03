import {useState, useLayoutEffect} from 'react';
import type {RefObject} from 'react';

export const useElement = <T extends HTMLElement>(ref: RefObject<T>): T | null => {
    const [element, setElement] = useState<T | null>(null);

    useLayoutEffect(() => {
        setElement(ref.current);
    }, [ref.current]);

    return element;
};
