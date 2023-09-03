import {useEffect} from 'react';

export const useClickOutside = (
    element: HTMLElement | null,
    callback: (event: MouseEvent) => void,
): void => {
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (element && !element.contains(event.target as Node)) {
                callback(event);
            }
        };

        // Making a macrotask to avoid instant fire on render
        setTimeout(() => document.addEventListener('click', handler), 0);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, [element]);
};
