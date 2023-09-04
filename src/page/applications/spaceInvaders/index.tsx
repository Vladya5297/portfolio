import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/space-invaders-logo.png';

export const SPACE_INVADERS_ID = 'spaceInvaders' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const SpaceInvaders = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: SPACE_INVADERS_ID,
        title: 'Space Invaders',
        image: logo.src,
        root,
        defaultSize: {
            height: 600,
            width: 340,
        },
    });

    return ready ? (
        <Application
            id={SPACE_INVADERS_ID}
            root={root}
            window={{
                lockAspectRatio: true,
                disableFullscreen: true,
                maxWidth: 420,
                maxHeight: 745,
                content: <Content />,
            }}
        />
    ) : null;
};
