import {useEffect, useState} from 'react';

import {state} from '~/page/state';
import {windowsActions} from '~/page/state/windows';
import type {AddWindowPayload} from '~/page/state/windows';

export const useRoot = (): HTMLElement | null => {
    const [root, setRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const main = document.querySelector('main')!;
        setRoot(main);
    }, []);

    return root;
};

/**
 * Should be called before rendering.
 * @example
 * setup({id, title, image});
 *
 * const Component = () => {...}
 */
export const setup = (params: AddWindowPayload) => {
    state.dispatch(windowsActions.addWindow(params));
};
