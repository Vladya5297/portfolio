import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

const id = 'wavelength' as WindowId;
const title = 'Wavelength';
const image = '';
const Content = lazyContent(() => import('./Content'));

export const Wavelength = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image, root});

    return ready && (
        <Application
            id={id}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    );
};
