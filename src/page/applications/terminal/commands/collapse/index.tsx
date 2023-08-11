import {createPortal} from 'react-dom';
import {useEffect} from 'react';

import {ROOT_ID} from '~/constants/root';
import {resetFocus} from '~/utils/dom';

import type {Command} from '../types';
import {key} from '../../utils/key';

import css from './style.m.css';

const Collapse = () => {
    useEffect(resetFocus, []);

    return createPortal(
        <div className={css.collapse} onClick={event => {event.stopPropagation()}}>
            <h3>Blue screen of death</h3>
            <div>
                <p>A fatal exception 0E has occurred at 0028:C1101AC7 in UXD ctpc19x(05)</p>
                <p>You've broke everything, now you unable to continue to use the system.</p>
                <p>It's all your fault. There is no way to fix it.</p>
                <p>The only thing you can do - contact the administrator:</p>
                <a href="mailto:1257dobro@gmail.com">1257dobro@gmail.com</a>
            </div>
        </div>,
        document.getElementById(ROOT_ID)!,
    );
};

export const collapse: Command = () => {
    return [
        <Collapse key={key()} />,
        <span key={key()}>What have you done</span>,
    ];
};
