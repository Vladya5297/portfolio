import {createApplication} from '~/page/components/Application';

import {CROC_ID} from './constants';
import logo from './assets/croc-logo.png';

export const Croc = createApplication({
    id: CROC_ID,
    title: 'Croc',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
