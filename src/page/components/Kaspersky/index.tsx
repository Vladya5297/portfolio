import {lazy} from 'react';

import kasperskyLogo from '~/assets/kaspersky-logo.png';
import {promiseDelay} from '~/utils/promiseDelay';

import {Application} from '../Application';
import {WindowContent} from '../WindowContent';

const id = 'kaspersky';

const Content = lazy(() => promiseDelay(import('./Content.mdx'), 1000));

export const Kaspersky = () => {
    return (
        <Application
            id={id}
            title="Kaspersky"
            image={kasperskyLogo}
            content={(
                <WindowContent>
                    <Content />
                </WindowContent>
            )}
        />
    );
};
