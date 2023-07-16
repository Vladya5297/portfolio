import type {WindowId} from '~/page/state/windows';
import type {ApplicationProps} from '~/page/components/Application';
import {setup} from '~/page/components/Application';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';

import image from './assets/kaspersky-logo.png';

const Content = lazyContent(() => import('./Content'));

export const kaspersky: ApplicationProps = {
    id: 'kaspersky' as WindowId,
    title: 'Kaspersky',
    image: image.src,
    content: (
        <WindowContent>
            <Content />
        </WindowContent>
    ),
};

setup(kaspersky);
