import type {ReactNode} from 'react';

import type {Breakpoint as BreakpointType} from './types';
import {useBreakpoint} from './useBreakpoint';

export * from './useBreakpoint';

type Props = {
    from?: BreakpointType;
    to?: BreakpointType;
    children: ReactNode;
};

export const Breakpoint = ({from, to, children}: Props) => {
    const matches = useBreakpoint({from, to});

    return matches ? <>{children}</> : null;
};
