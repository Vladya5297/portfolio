import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/wavelength-logo.png';

export const WAVELENGTH_ID = 'wavelength' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Wavelength = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: WAVELENGTH_ID,
        title: 'Wavelength',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={WAVELENGTH_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
