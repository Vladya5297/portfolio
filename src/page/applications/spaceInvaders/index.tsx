import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/space-invaders-logo.png';

const id = 'spaceInvaders' as WindowId;
const title = 'Space Invaders';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const SpaceInvaders = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image});

    if (!ready) return null;

    return (
        <Application
            id={id}
            root={root}
            shortcut={{
                column: 'last',
            }}
            window={{
                content: <Content />,
            }}
        />
    );
};
