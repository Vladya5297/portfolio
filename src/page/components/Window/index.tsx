import {useBreakpoint} from '~/components/Breakpoint/useBreakpoint';

import {DesktopWindow} from './DesktopWindow';
import {MobileWindow} from './MobileWindow';
import type {WindowProps} from './types';

export const Window = (props: WindowProps) => {
    const isMobile = useBreakpoint({to: 's'});

    return isMobile
        ? <MobileWindow {...props} />
        : <DesktopWindow {...props} />;
};
