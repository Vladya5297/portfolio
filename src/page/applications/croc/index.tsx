import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/croc-logo.png';

const id = 'croc' as WindowId;
const title = 'Croc';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Croc = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image, root});

    return ready ? (
        <Application
            id={id}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
