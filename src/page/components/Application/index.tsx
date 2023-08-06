import type {ReactNode} from 'react';

import {pick} from '~/utils/toolkit';
import {useAction} from '~/utils/redux/useAction';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {selectWindow, windowsActions} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import {useWindowExists} from '~/page/utils/useWindowExists';

import type {ShortcutProps} from '../Shortcut';
import {Shortcut} from '../Shortcut';
import {Window} from '../Window';
import {WindowContent} from '../WindowContent';

export * from './utils';

export type ApplicationProps = {
    id: WindowId;
    window: {
        lockAspectRatio?: boolean;
        disableFullscreen?: boolean;
        draggable?: boolean;
        resizeable?: boolean;
        content: ReactNode;
    };
    root: HTMLElement;
    shortcut?: Pick<ShortcutProps, 'row' | 'column'>;
};

/** Make sure to call `useSetup` before render! */
export const Application = ({
    id: windowId,
    root,
    window,
    shortcut,
}: ApplicationProps) => {
    useWindowExists(windowId, {throw: true});

    const {title, image} = useSelectorMapper(
        state => selectWindow(state, windowId),
        value => pick(value, ['title', 'image']),
    );

    const openWindow = useAction(() => windowsActions.open(windowId));

    const {content, ...windowProps} = window;

    return (
        <>
            <Shortcut
                title={title}
                image={image}
                onClick={openWindow}
                {...shortcut}
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
