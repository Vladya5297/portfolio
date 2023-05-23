import type {ReactNode} from 'react';

import type {Size} from './types';
import {useBreakpoint} from './useBreakpoint';

type Props = {
    from?: Size;
    to?: Size;
    children: ReactNode;
};

export const Breakpoint = ({from, to, children}: Props) => {
    const matches = useBreakpoint({from, to});

    return matches ? <>{children}</> : null;
};
