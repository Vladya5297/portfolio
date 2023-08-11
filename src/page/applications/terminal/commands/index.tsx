import type {ReactNode} from 'react';

import {state} from '~/page/state';
import type {WindowId} from '~/page/state/windows';
import {windowsActions, selectWindowExists} from '~/page/state/windows';

import {key} from '../utils/key';

import {ls} from './ls';
import {cd} from './cd';
import {help} from './help';
import {easteregg} from './easteregg';
import {collapse} from './collapse';

const commands = {
    ls,
    cd,
    help,
    collapse,
    easteregg,
};

export const run = (value: string): ReactNode[] => {
    const [input, ...args] = value.split(' ');

    if (!input) {
        return [];
    }

    const result: ReactNode[] = [];

    // If input is known command - call it
    const command = commands[input as keyof typeof commands];
    if (command) {
        const output = command(...args);
        result.push(...output);
        return result;
    }

    const store = state.getState();

    // If input is window id - open it
    const windowId = input as WindowId;
    const exists = selectWindowExists(store, windowId);
    if (exists) {
        state.dispatch(windowsActions.open(windowId));
        return result;
    }

    // Else - unknown command
    result.push(
        <span key={key()}>
            {`Unknown command ${input}`}
        </span>,
    );

    return result;
};
