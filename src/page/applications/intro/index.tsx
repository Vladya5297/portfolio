import {createApplication} from '~/page/components/Application';

import {INTRO_ID} from './constants';
import logo from './assets/intro-logo.png';

export const Intro = createApplication({
    id: INTRO_ID,
    title: 'Introduction',
    image: logo.src,
    shortcut: false,
    window: {
        content: () => import('./Content'),
        resizeable: false,
        disableFullscreen: true,
        defaultSize: {
            height: 370,
            width: 480,
        },
    },
});
