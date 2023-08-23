import type {RefObject} from 'react';
import {useLayoutEffect, useMemo} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {debounce} from '~/utils/toolkit';

import {windowsActions} from '../state/windows';

export const useRootSize = (ref: RefObject<HTMLElement>): void => {
    const setConstraints = useAction(windowsActions.setConstraints);
    const setSize = useMemo(() => debounce(setConstraints, 300), []);

    useLayoutEffect(() => {
        const root = ref.current;
        if (!root) return;

        // Setup initial constraints
        const rect = root.getBoundingClientRect();
        setConstraints({width: rect.width, height: rect.height});

        const observer = new ResizeObserver(entries => {
            const [entry] = entries;
            const {width, height} = entry.target.getBoundingClientRect();

            setSize({width, height});
        });

        observer.observe(root);

        return () => observer.disconnect();
    }, [ref]);
};
