import AES from 'crypto-js/aes';
import SHA256 from 'crypto-js/sha256';
import utf8 from 'crypto-js/enc-utf8';
import base64 from 'crypto-js/enc-base64';

import {key} from '../../utils/key';
import type {Command} from '../types';

import {messages} from './constants';

export const easteregg: Command = (arg: string) => {
    const value = SHA256(arg).toString(base64);

    if (!messages.has(value)) {
        return [
            <span key={key()}>There is no easter egg</span>,
        ];
    }

    const message = AES.decrypt(messages.get(value), arg).toString(utf8);

    return [
        <span key={key()}>{message}</span>,
    ];
};
