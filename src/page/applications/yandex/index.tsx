import {createApplication} from '~/page/components/Application';

import {YANDEX_ID} from './constants';
import logo from './assets/yandex-logo.png';

export const Yandex = createApplication({
    id: YANDEX_ID,
    title: 'Yandex',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
