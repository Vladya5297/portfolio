import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/yandex-logo.png';

const id = 'yandex' as WindowId;
const title = 'Yandex';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

export const Yandex = ({root}: ApplicationProps) => {
    const ready = useSetup({id, title, image, root});

    return ready ? (
        <Application
            id={id}
            root={root}
            shortcut={{
                column: 1,
                row: 3,
            }}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
