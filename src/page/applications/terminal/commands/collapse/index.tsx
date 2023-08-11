import {createPortal} from 'react-dom';

import {ROOT_ID} from '~/constants/root';

import type {Command} from '../types';
import {key} from '../../utils/key';

import css from './style.m.css';

const Collapse = () => {
    const root = document.getElementById(ROOT_ID)!;
    root.inert = true;

    return createPortal(
        <div className={css.collapse} />,
        root,
    );
};

export const collapse: Command = () => {
    return [
        <Collapse key={key()} />,
        <span key={key()}>What have you done</span>,
    ];
};
