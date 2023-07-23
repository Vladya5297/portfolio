import type {WindowId} from '~/page/state/windows';
import type {ApplicationProps} from '~/page/components/Application';
import {setup} from '~/page/components/Application';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';

const Content = lazyContent(() => import('./Content'));

export const spaceInvaders: ApplicationProps = {
    id: 'spaceInvaders' as WindowId,
    title: 'Space Invaders',
    image: '',
    content: (
        <WindowContent>
            <Content />
        </WindowContent>
    ),
};

setup(spaceInvaders);
