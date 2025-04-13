import {createApplication} from '~/page/components/Application';

import {BESTDOCTOR_ID} from './constants';
import logo from './assets/bestdoctor-logo.png';

export const Bestdoctor = createApplication({
    id: BESTDOCTOR_ID,
    title: 'BestDoctor',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
