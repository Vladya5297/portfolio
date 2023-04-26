import {useId, useEffect, useState} from 'react';
import type {ReactNode} from 'react';

import {Window as WindowBase} from '~/components/Window';
import {useAction} from '~/utils/useAction';
import {windowsSlice} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows/types';

type WindowConfig = {
    title: string;
};

type Props = {
    config: WindowConfig;
    children: ReactNode;
};

export const Window = ({config, children}: Props) => {
    const {
        title,
    } = config;

    const [root, setRoot] = useState<HTMLElement>();
    const windowId = useId() as WindowId;

    const setup = useAction(() => windowsSlice.actions.addWindow(windowId));

    useEffect(() => {
        setup();
        const main = document.querySelector('main')!;
        setRoot(main);
    }, []);

    const minimize = useAction(() => windowsSlice.actions.setMinimized(windowId));

    return root ? (
        <WindowBase title={title} root={root} onMinimize={minimize}>
            {children}
        </WindowBase>
    ) : null;
};
