import {useCallback, useMemo, useRef, useSyncExternalStore} from 'react';

import {inRange} from '~/utils/toolkit';

import type {CtrValues} from '../constructor/types';
import type {Breakpoints} from '../constructor';

import type {HookParams} from './types';
import {getIndexRange} from './getIndexRange';

export const createBreakpointsHook = <T extends CtrValues>(breakpoints: Breakpoints<T>) => {
    const {labels} = breakpoints;

    return (params: HookParams<T>) => {
        const indexRange = useMemo(() => getIndexRange(params, labels), [params]);

        const initialIndex = useMemo(() => labels.indexOf(breakpoints.current), []);
        const result = useRef(inRange(indexRange, initialIndex));

        const subscribe = useCallback((onChange: () => void) => {
            const callback = (breakpoint: keyof T) => {
                const index = labels.indexOf(breakpoint);
                const match = inRange(indexRange, index);

                if (match !== result.current) {
                    result.current = match;
                    onChange();
                }
            };

            breakpoints.addEventListener('change', callback);

            return () => {
                breakpoints.removeEventListener('change', callback);
            };
        }, [indexRange]);

        return useSyncExternalStore(subscribe, () => result.current);
    };
};
