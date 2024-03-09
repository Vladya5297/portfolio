import type {RefObject} from 'react';
import {useEffect} from 'react';

import {debounce} from '../toolkit';

type Options = {
    debounce?: number;
};

export const useResizeObserver = (
    ref: RefObject<HTMLElement>,
    callback: (rect: DOMRect) => void,
    options: Options = {},
): void => {
    useEffect(() => {
        if (!ref.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            const [entry] = entries;
            callback(entry.target.getBoundingClientRect());
        };

        const handler = options.debounce ? debounce(handleResize, options.debounce) : handleResize;

        const observer = new ResizeObserver(handler);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, callback, options.debounce]);
};
