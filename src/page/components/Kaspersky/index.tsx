import image from '~/assets/kaspersky-logo.png';
import type {WindowId} from '~/page/state/windows/types';

import {Application, setup} from '../Application';
import {WindowContent, lazyContent} from '../WindowContent';

const id = 'kaspersky' as WindowId;
const title = 'Kaspersky';
const Content = lazyContent(() => import('./Content.mdx'));

setup({id, title, image});

export const Kaspersky = () => {
    return (
        <Application
            id={id}
            title={title}
            image={image}
            content={(
                <WindowContent>
                    <Content />
                </WindowContent>
            )}
        />
    );
};
