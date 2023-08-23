import {Application, useSetup} from '~/page/components/Application';
import type {WindowId} from '~/page/state/windows';
import {lazyContent} from '~/page/components/WindowContent';

import type {ApplicationProps} from '../types';

import logo from './assets/hire-logo.png';

const id = 'hire' as WindowId;
const title = 'Hire';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Hire = ({root}: ApplicationProps) => {
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
