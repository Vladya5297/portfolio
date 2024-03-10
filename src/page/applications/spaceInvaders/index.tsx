import {createApplication} from '~/page/components/Application';

import {SPACE_INVADERS_ID} from './constants';
import logo from './assets/space-invaders-logo.png';

export const SpaceInvaders = createApplication({
    id: SPACE_INVADERS_ID,
    title: 'Space Invaders',
    image: logo.src,
    window: {
        content: () => import('./Content'),
        lockAspectRatio: true,
        disableFullscreen: true,
        maxWidth: 420,
        maxHeight: 745,
        defaultSize: {
            height: 600,
            width: 340,
        },
    },
});
