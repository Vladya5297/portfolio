import {useEffect, useState} from 'react';

import {windowsSlice} from '~/page/state/windows';
import type {AddWindowPayload} from '~/page/state/windows/types';
import {useAction} from '~/utils/useAction';

export const useSetup = (params: AddWindowPayload): void => {
    const setup = useAction(() => windowsSlice.actions.addWindow(params));

    useEffect(setup, [setup]);
};

export const useRoot = (): HTMLElement | null => {
    const [root, setRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const main = document.querySelector('main')!;
        setRoot(main);
    }, []);

    return root;
};
