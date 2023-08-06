import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/wavelength-logo.png';

const id = 'wavelength' as WindowId;
const title = 'Wavelength';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Wavelength = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image, root});

    return ready ? (
        <Application
            id={id}
            root={root}
            shortcut={{
                row: 1,
                column: 'last',
            }}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
