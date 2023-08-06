import type {ReactNode} from 'react';

import type {WindowId} from '~/page/state/windows';

export type WindowProps = {
    id: WindowId;
    content: ReactNode;
    root: HTMLElement;
    draggable?: boolean;
    resizeable?: boolean;
    lockAspectRatio?: boolean;
    disableFullscreen?: boolean;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
};
