import {createPortal} from 'react-dom';
import {useEffect} from 'react';

import {APP_ID} from '~/constants/app';
import {CONTACTS} from '~/constants/contacts';
import {resetFocus} from '~/utils/dom';

import type {Command} from '../types';
import {key} from '../../utils/key';

import css from './style.m.css';

const Collapse = () => {
    useEffect(resetFocus, []);

    return createPortal(
        <div className={css.collapse} onClick={event => {event.stopPropagation()}}>
            <h3>Blue screen of death</h3>
            <div className={css.content}>
                <p>A fatal exception 0E has occurred at 0028:C1101AC7 in UXD ctpc19x(05)</p>
                <p>You've broke everything, now you unable to continue to use the system.</p>
                <p>It's all your fault. There is no way to fix it.</p>
                <p>The only thing you can do - contact the administrator:</p>
                <a href={CONTACTS.TELEGRAM} target="_blank" rel="noreferrer">
                    {CONTACTS.TELEGRAM}
                </a>
            </div>
        </div>,
        document.getElementById(APP_ID)!,
    );
};

export const collapse: Command = () => {
    return [
        <Collapse key={key()} />,
        <span key={key()}>What have you done</span>,
    ];
};
