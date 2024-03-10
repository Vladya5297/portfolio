import {createApplication} from '~/page/components/Application';

import {WAVELENGTH_ID} from './constants';
import logo from './assets/wavelength-logo.png';

export const Wavelength = createApplication({
    id: WAVELENGTH_ID,
    title: 'Wavelength',
    image: logo.src,
    window: {
        content: () => import('./Content'),
    },
});
