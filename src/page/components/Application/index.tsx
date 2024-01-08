import type {ReactNode} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {selectWindow, windowsActions} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import {useProxySelector} from '~/utils/redux/useProxySelector';

import {Shortcut} from '../Shortcut';
import {Window} from '../Window';
import {WindowContent} from '../WindowContent';

import {useWindowExists} from './utils';

export * from './utils';

export type ApplicationProps = {
    id: WindowId;
    window: {
        lockAspectRatio?: boolean;
        disableFullscreen?: boolean;
        draggable?: boolean;
        resizeable?: boolean;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        content: ReactNode;
    };
    root: HTMLElement;
};

/** Make sure to call `useSetup` before render! */
export const Application = ({
    id: windowId,
    root,
    window,
}: ApplicationProps) => {
    useWindowExists(windowId, {throw: true});

    const {title, image} = useProxySelector(state => selectWindow(state, windowId));

    const openWindow = useAction(() => windowsActions.open(windowId));

    const {content, ...windowProps} = window;

    return (
        <>
            <Shortcut
                title={title}
                image={image}
                onClick={openWindow}
            />
            <Window
                id={windowId}
                root={root}
                {...windowProps}
                content={(
                    <WindowContent>
                        {content}
                    </WindowContent>
                )}
            />
        </>
    );
};
