import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/croc-logo.png';

export const CROC_ID = 'croc' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Croc = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: CROC_ID,
        title: 'Croc',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={CROC_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
