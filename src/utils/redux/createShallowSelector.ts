import {shallowEqual} from 'react-redux';
import {createSelectorCreator, defaultMemoize} from 'reselect';

export const createShallowSelector = createSelectorCreator(
    defaultMemoize,
    {resultEqualityCheck: shallowEqual},
);
