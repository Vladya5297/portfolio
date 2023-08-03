import {useEffect, useState} from 'react';

import {windowsActions} from '~/page/state/windows';
import type {AddWindowPayload} from '~/page/state/windows';
import {useWindowExists} from '~/page/utils/useWindowExists';
import {useAction} from '~/utils/redux/useAction';

export const useSetup = ({id, title, image}: AddWindowPayload): boolean => {
    const isExists = useWindowExists(id);
    const [ready, setReady] = useState(isExists);

    const setup = useAction(() => windowsActions.addWindow({id, title, image}));

    useEffect(() => {
        if (ready) return;

        setup();
        setReady(true);
    }, []);

    return ready;
};
