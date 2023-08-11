import {key} from '../../utils/key';
import type {Command} from '../types';

import css from './style.m.css';

export const easteregg: Command = (arg: string) => {
    switch (arg) {
        case 'mary': {
            return [
                <span key={key()} className={css.mary}>My bunny 🐰</span>,
            ];
        }
        case 'litart': {
            return [
                <span key={key()} className={css.litart}>Do you want money and glory?</span>,
            ];
        }
        case 'kik': {
            return [
                <span key={key()} className={css.kik}>Devil 😈</span>,
            ];
        }
        case 'reboot': {
            return [
                <span key={key()} className={css.reboot}>Reboot team strong 💪</span>,
            ];
        }
        default: {
            return [
                <span key={key()}>There is no easter egg</span>,
            ];
        }
    }
};
