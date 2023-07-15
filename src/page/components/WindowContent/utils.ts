import {lazy} from 'react';
import type {ComponentType} from 'react';

import {promiseDelay} from '~/utils/promiseDelay';

type LazyContent = () => Promise<{default: ComponentType<any>}>;

/** Wraps async import into React.lazy with delay for better UX */
export const lazyContent = (content: LazyContent) => {
    return lazy(() => promiseDelay(content(), 500));
};
