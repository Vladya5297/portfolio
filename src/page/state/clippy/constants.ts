import {CROC_ID} from '~/page/applications/croc';
import {HIRE_ID} from '~/page/applications/hire';
import {KASPERSKY_ID} from '~/page/applications/kaspersky';
import {SPACE_INVADERS_ID} from '~/page/applications/spaceInvaders';
import {TERMINAL_ID} from '~/page/applications/terminal';
import {WAVELENGTH_ID} from '~/page/applications/wavelength';
import {YANDEX_ID} from '~/page/applications/yandex';

export const STATE_ID = 'clippy';

export const DEFAULT_MESSAGE = 'Hi! I\'m Clippy, your personal assistant. I can improve your mood, just click on me!';

export const ERROR_MESSAGE = 'Sorry, I have no jokes for you';

export const WINDOWS_MESSAGES = {
    [CROC_ID]: 'Croc is a technology company operating in the Russian b2b IT market.',
    [KASPERSKY_ID]: 'Kaspersky is an international company specializing in the development of computer virus protection systems, spam prevention, hacker attacks, and other cybersecurity measures.',
    [YANDEX_ID]: 'Yandex is a Russian multinational technology company providing Internet-related products and services. Most well-known for its eponymous internet search engine.',
    [WAVELENGTH_ID]: 'Wavelength is a tabletop game in which players must decipher the riddle posed by the game master through reasoning.',
    [SPACE_INVADERS_ID]: 'Have fun!',
    [TERMINAL_ID]: 'I hope you won\'t break anything...',
    [HIRE_ID]: 'Great choice!',
};
