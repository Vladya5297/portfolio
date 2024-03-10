import {createApplication} from '~/page/components/Application';

import {KASPERSKY_ID} from './constants';
import logo from './assets/kaspersky-logo.png';

export const Kaspersky = createApplication({
    id: KASPERSKY_ID,
    title: 'Kaspersky',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
