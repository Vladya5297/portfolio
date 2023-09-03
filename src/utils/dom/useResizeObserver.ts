import type {RefObject} from 'react';
import {useEffect} from 'react';

import {debounce} from '../toolkit';

export const useResizeObserver = (
    ref: RefObject<HTMLElement>,
    callback: (rect: DOMRect) => void,
): void => {
    useEffect(() => {
        if (!ref.current) return;

        const handler = debounce((entries: ResizeObserverEntry[]) => {
            const [entry] = entries;
            callback(entry.target.getBoundingClientRect());
        }, 100);

        const observer = new ResizeObserver(handler);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, callback]);
};
