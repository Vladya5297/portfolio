import {createApplication} from '~/page/components/Application';

import {HIRE_ID} from './constants';
import logo from './assets/hire-logo.png';

export const Hire = createApplication({
    id: HIRE_ID,
    title: 'Hire',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
