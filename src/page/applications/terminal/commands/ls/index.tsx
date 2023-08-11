import {state} from '~/page/state';

import type {Command} from '../types';
import {key} from '../../utils/key';

import css from './style.m.css';

export const ls: Command = () => {
    const store = state.getState();
    const windowIds = store.windows.ids;

    return windowIds.map(id => (
        <span key={key()} className={css.file}>{id}</span>
    ));
};
