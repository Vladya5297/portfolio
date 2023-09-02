import {useEffect} from 'react';

import {debounce} from '../toolkit';

export const useResizeObserver = (
    element: HTMLElement | null,
    callback: (rect: DOMRect) => void,
): void => {
    useEffect(() => {
        if (!element) return;

        const handler = debounce((entries: ResizeObserverEntry[]) => {
            const [entry] = entries;
            callback(entry.target.getBoundingClientRect());
        }, 100);

        const observer = new ResizeObserver(handler);
        observer.observe(element);

        return () => observer.disconnect();
    }, [element]);
};
