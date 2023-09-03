import type {RefObject} from 'react';
import {useEffect} from 'react';

export const useClickOutside = (
    ref: RefObject<HTMLElement>,
    callback: (event: MouseEvent) => void,
): void => {
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        };

        // Making a macrotask to avoid instant fire on render
        setTimeout(() => document.addEventListener('click', handler), 0);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [ref, callback]);
};
