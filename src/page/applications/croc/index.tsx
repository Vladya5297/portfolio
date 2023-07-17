import {setup, type ApplicationProps} from '~/page/components/Application';
import type {WindowId} from '~/page/state/windows';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';

import image from './assets/croc-logo.png';

const Content = lazyContent(() => import('./Content'));

export const croc: ApplicationProps = {
    id: 'croc' as WindowId,
    title: 'Croc',
    image: image.src,
    content: (
        <WindowContent>
            <Content />
        </WindowContent>
    ),
};

setup(croc);
