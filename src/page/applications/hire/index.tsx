import {Application, useSetup} from '~/page/components/Application';
import type {WindowId} from '~/page/state/windows';
import {lazyContent} from '~/page/components/WindowContent';

import type {ApplicationProps} from '../types';

import logo from './assets/hire-logo.png';

export const HIRE_ID = 'hire' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Hire = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: HIRE_ID,
        title: 'Hire',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={HIRE_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
