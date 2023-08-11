import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/terminal-logo.png';

const id = 'terminal' as WindowId;
const title = 'Terminal';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Terminal = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image, root});

    return ready ? (
        <Application
            id={id}
            root={root}
            shortcut={{
                column: 3,
                row: 1,
            }}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
