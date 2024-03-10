import {lazy, useMemo} from 'react';

import {promiseDelay} from '~/utils/promiseDelay';

import type {LazyComponent} from './types';

const lazyContent = (content: LazyComponent) => {
    return lazy(() => promiseDelay(content(), 500));
};

const promises = new Map();

export const useContent = (content: LazyComponent) => {
    return useMemo(() => {
        if (promises.has(content)) {
            return promises.get(content);
        }

        const result = lazyContent(content);
        promises.set(content, result);

        return result;
    }, [content]);
};
