import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/space-invaders-logo.png';

const id = 'spaceInvaders' as WindowId;
const title = 'Space Invaders';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

const height = 600;
const width = 340;

export const SpaceInvaders = ({root}: ApplicationProps) => {
    const rect = root.getBoundingClientRect();
    const ready = useSetup({
        id,
        title,
        image,
        root,
        defaultSize: {height, width},
        defaultPosition: {
            x: rect.width / 2 - width / 2,
            y: rect.height / 2 - height / 2,
        },
    });

    return ready ? (
        <Application
            id={id}
            root={root}
            shortcut={{
                column: 2,
                row: 2,
            }}
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
