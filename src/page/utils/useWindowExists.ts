import {useSelector} from 'react-redux';

import {selectWindowExists, type WindowId} from '../state/windows';
import type {State} from '../state/types';

type Options = Partial<{
    throw: boolean;
    message: string;
}>;

export const useWindowExists = (windowId: WindowId, options: Options = {}) => {
    const exists = useSelector((state: State) => selectWindowExists(state, windowId));

    if (!exists && options.throw) {
        throw new Error(options.message || `Seems like you haven't call useSetup for windowId: ${windowId}`);
    }

    return exists;
};
