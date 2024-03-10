import {createApplication} from '~/page/components/Application';

import {GITHUB_ID} from './constants';
import logo from './assets/github-logo.png';

export const GitHub = createApplication({
    id: GITHUB_ID,
    title: 'GitHub',
    image: logo.src,
    window: false,
    shortcut: {
        tag: 'a',
        href: 'https://github.com/Vladya5297/portfolio',
        target: '_blank',
    },
});
