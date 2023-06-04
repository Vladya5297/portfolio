import {useSelector} from 'react-redux';

import type {State} from '~/page/state/types';

import {createShallowSelector} from './createShallowSelector';

/** Will trigger rerender only if mapper return value doesn't shallow equal to previous. */
export const useSelectorMapper = <
    T extends Record<string, unknown>,
    K,
>(
    selector: (state: State) => T,
    mapper: (value: T) => K,
) => {
    const customSelector = createShallowSelector(
        selector,
        mapper,
    );

    const value = useSelector(customSelector);

    return value;
};
