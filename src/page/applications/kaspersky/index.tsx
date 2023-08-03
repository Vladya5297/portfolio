import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/kaspersky-logo.png';

const id = 'kaspersky' as WindowId;
const title = 'Kaspersky';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Kaspersky = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image});

    if (!ready) return null;

    return (
        <Application
            id={id}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    );
};
