import type {ReactNode} from 'react';

import type {WindowId} from '~/page/state/windows/types';
import {useBreakpoint} from '~/components/Breakpoint/useBreakpoint';

import {DesktopWindow} from './DesktopWindow';
import {MobileWindow} from './MobileWindow';

type Props = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
};

export const Window = (props: Props) => {
    const isMobile = useBreakpoint({to: 's'});

    return isMobile
        ? <MobileWindow {...props} />
        : <DesktopWindow {...props} />;
};
