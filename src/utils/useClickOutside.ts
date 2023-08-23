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

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [ref, callback]);
};
