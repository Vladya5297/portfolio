import {Application, useSetup} from '~/page/components/Application';
import {lazyContent} from '~/page/components/WindowContent';
import type {WindowId} from '~/page/state/windows';

import type {ApplicationProps} from '../types';

import logo from './assets/yandex-logo.png';

export const YANDEX_ID = 'yandex' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Yandex = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: YANDEX_ID,
        title: 'Yandex',
        image: logo.src,
        root,
    });

    return ready ? (
        <Application
            id={YANDEX_ID}
            root={root}
            window={{
                content: <Content />,
            }}
        />
    ) : null;
};
