import {useSelector} from 'react-redux';

import {selectIsWindowExists, type WindowId} from '../state/windows';
import type {State} from '../state/types';

type Options = Partial<{
    throw: boolean;
    message: string;
}>;

export const useWindowExists = (windowId: WindowId, options: Options = {}) => {
    const isExists = useSelector((state: State) => selectIsWindowExists(state, windowId));

    if (!isExists && options.throw) {
        throw new Error(options.message || `Seems like you haven't call useSetup for windowId: ${windowId}`);
    }

    return isExists;
};
