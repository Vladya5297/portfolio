import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/kaspersky-logo.png';

export const KASPERSKY_ID = 'kaspersky' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Kaspersky = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: KASPERSKY_ID,
        title: 'Kaspersky',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={KASPERSKY_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
