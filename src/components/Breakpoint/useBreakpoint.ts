import {useEffect, useMemo, useState} from 'react';

import {breakpoint} from './constants';
import type {Breakpoint} from './types';

type Params = {
    from?: Breakpoint;
    to?: Breakpoint;
};

export const useBreakpoint = ({from, to}: Params): boolean => {
    const query = [
        from && `(min-width: ${breakpoint[from] + 1}px)`,
        to && `(max-width: ${breakpoint[to]}px)`,
    ]
        .filter(Boolean)
        .join(' and ');

    const mediaQueryList = useMemo(() => window.matchMedia(query), [query]);

    const [matches, setMatches] = useState(mediaQueryList.matches);

    useEffect(() => {
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [mediaQueryList]);

    return matches;
};
