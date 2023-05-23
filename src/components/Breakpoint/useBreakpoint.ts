import {useEffect, useMemo, useState} from 'react';

import {size} from './constants';
import type {Size} from './types';

type Params = {
    from?: Size;
    to?: Size;
};

export const useBreakpoint = ({from, to}: Params): boolean => {
    const query = [
        from && `(min-width: ${size[from] + 1}px)`,
        to && `(max-width: ${size[to]}px)`,
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
