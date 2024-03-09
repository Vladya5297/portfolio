import {useEffect} from 'react';

import {CONTACTS} from '~/constants/contacts';
import {resetFocus} from '~/utils/dom';

import css from './style.m.css';

export const Collapse = () => {
    useEffect(resetFocus, []);

    return (
        <div className={css.collapse}>
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
        </div>
    );
};
