import {pick} from '~/utils/pick';
import {useAction} from '~/utils/redux/useAction';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {selectWindow, windowsActions} from '~/page/state/windows';
import type {WindowId} from '~/page/state/windows';
import {useWindowExists} from '~/page/utils/useWindowExists';

import type {ShortcutProps} from '../Shortcut';
import {Shortcut} from '../Shortcut';
import type {WindowProps} from '../Window';
import {Window} from '../Window';
import {WindowContent} from '../WindowContent';

export * from './utils';

export type ApplicationProps = {
    id: WindowId;
    window: Pick<WindowProps, 'content'>;
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
                content={(
                    <WindowContent>
                        {window.content}
                    </WindowContent>
                )}
            />
        </>
    );
};
