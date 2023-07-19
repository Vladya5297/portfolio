import type {WindowId} from '~/page/state/windows';
import type {ApplicationProps} from '~/page/components/Application';
import {setup} from '~/page/components/Application';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';

import image from './assets/yandex-logo.png';

const Content = lazyContent(() => import('./Content'));

export const yandex: ApplicationProps = {
    id: 'yandex' as WindowId,
    title: 'Yandex',
    image: image.src,
    content: (
        <WindowContent>
            <Content />
        </WindowContent>
    ),
};

setup(yandex);
