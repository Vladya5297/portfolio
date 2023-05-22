import {useEffect, useState} from 'react';

import type {Size} from '~/page/state/windows/types';

export const useRootSize = (root: HTMLElement): Size => {
    const [size, setSize] = useState<Size>(() => {
        const {width, height} = root.getBoundingClientRect();
        return {width, height};
    });

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            const [entry] = entries;
            const {width, height} = entry.target.getBoundingClientRect();

            setSize({width, height});
        });

        observer.observe(root);

        return () => observer.disconnect();
    }, [root]);

    return size;
};
