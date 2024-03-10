import {createApplication} from '~/page/components/Application';

import {TERMINAL_ID} from './constants';
import logo from './assets/terminal-logo.png';

export const Terminal = createApplication({
    id: TERMINAL_ID,
    title: 'Terminal',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
