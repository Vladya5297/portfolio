import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/terminal-logo.png';

export const TERMINAL_ID = 'terminal' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Terminal = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: TERMINAL_ID,
        title: 'Terminal',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={TERMINAL_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
