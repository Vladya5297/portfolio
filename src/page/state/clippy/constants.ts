import {BESTDOCTOR_ID} from '~/page/applications/bestdoctor/constants';
import {CROC_ID} from '~/page/applications/croc/constants';
import {HIRE_ID} from '~/page/applications/hire/constants';
import {KASPERSKY_ID} from '~/page/applications/kaspersky/constants';
import {SPACE_INVADERS_ID} from '~/page/applications/spaceInvaders/constants';
import {TERMINAL_ID} from '~/page/applications/terminal/constants';
import {WAVELENGTH_ID} from '~/page/applications/wavelength/constants';
import {YANDEX_ID} from '~/page/applications/yandex/constants';

import type {ClippyAnimation} from './types';
import image1 from './assets/clippy_1.gif';
import image2 from './assets/clippy_2.gif';
import image3 from './assets/clippy_3.gif';
import image4 from './assets/clippy_4.gif';
import image5 from './assets/clippy_5.gif';

export const STATE_ID = 'clippy';

export const DEFAULT_MESSAGE = 'Hi! I\'m Clippy, your personal assistant. I can improve your mood, just click on me!';

export const ERROR_MESSAGE = 'Sorry, I have no jokes for you';

export const WINDOWS_MESSAGES = {
    [BESTDOCTOR_ID]: 'Bestdoctor (currently known as "Luchi") is a group of companies specializing in medicine and insurance.',
    [CROC_ID]: 'Croc is a technology company operating in the Russian b2b IT market.',
    [KASPERSKY_ID]: 'Kaspersky is an international company specializing in the development of computer virus protection systems, spam prevention, hacker attacks, and other cybersecurity measures.',
    [YANDEX_ID]: 'Yandex is a Russian multinational technology company providing internet-related products and services. Most well-known for its eponymous internet search engine.',
    [WAVELENGTH_ID]: 'Wavelength is a tabletop game in which players must decipher the riddle posed by the game master through reasoning.',
    [SPACE_INVADERS_ID]: 'Have fun!',
    [TERMINAL_ID]: 'I hope you won\'t break anything...',
    [HIRE_ID]: 'Great choice!',
};

export const animations: ClippyAnimation[] = [
    {src: image1, duration: 4800},
    {src: image2, duration: 1900},
    {src: image3, duration: 6600},
    {src: image4, duration: 3200},
    {src: image5, duration: 4500},
];
