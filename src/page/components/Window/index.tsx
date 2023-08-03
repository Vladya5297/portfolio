import type {ReactNode} from 'react';

import type {WindowId} from '~/page/state/windows';
import {useBreakpoint} from '~/components/Breakpoint/useBreakpoint';

import {DesktopWindow} from './DesktopWindow';
import {MobileWindow} from './MobileWindow';

export type WindowProps = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const Window = (props: WindowProps) => {
    const isMobile = useBreakpoint({to: 's'});

    return isMobile
        ? <MobileWindow {...props} />
        : <DesktopWindow {...props} />;
};
