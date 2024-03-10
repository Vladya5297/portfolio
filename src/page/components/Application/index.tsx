import {windowsRootAtom} from '~/constants/atoms';
import {useAtom} from '~/utils/atom';

import {Window} from './Window';
import {Shortcut} from './Shortcut';
import type {ApplicationParams} from './types';
import {setupWindow} from './utils';

export const createApplication = (params: ApplicationParams) => {
    const {id, image, title, window, shortcut} = params;

    setupWindow(params);

    const Application = () => {
        const root = useAtom(windowsRootAtom);

        return root ? (
            <>
                {shortcut === false ? null : (
                    <Shortcut
                        id={id}
                        image={image}
                        title={title}
                        {...shortcut}
                    />
                )}

                {window === false ? null : (
                    <Window
                        id={id}
                        root={root}
                        {...window}
                    />
                )}
            </>
        ) : null;
    };
    Application.id = id;

    return Application;
};
