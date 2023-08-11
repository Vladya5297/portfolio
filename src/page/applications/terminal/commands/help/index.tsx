import {key} from '../../utils/key';
import type {Command} from '../types';

import css from './style.m.css';

export const help: Command = () => {
    return [
        <span key={key()} className={css.help}>ls</span>,
        <span key={key()} className={css.help}>cd</span>,
        <span key={key()} className={css.help}>clear</span>,
        <span key={key()} className={css.help}>collapse</span>,
        <span key={key()} className={css.help}>easteregg</span>,
    ];
};
