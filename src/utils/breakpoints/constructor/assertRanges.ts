import {head, tail} from '~/utils/toolkit';

import type {BreakpointRange} from './types';

const errors = {
    emptyList() {
        return new Error('Empty breakpoints list');
    },
    rangeGap(from: number, to: number) {
        return new Error(`Breakpoints don't cover range from ${from} to ${to}`);
    },
    overlap(a: BreakpointRange, b: BreakpointRange) {
        return new Error(`Ranges ${JSON.stringify(a)} and ${JSON.stringify(b)} are overlaping`);
    },
};

export const assertRanges = (ranges: Required<BreakpointRange>[]) => {
    const arr = [...ranges].sort((a, b) => head(a) - head(b));

    if (arr.length === 0) {
        throw errors.emptyList();
    }

    const firstRange = head(arr);
    const [firstRangeFrom] = firstRange;
    if (firstRangeFrom !== 0) {
        throw errors.rangeGap(0, firstRangeFrom);
    }

    const lastRange = tail(arr);
    const [, lastRangeTo] = lastRange;
    if (lastRangeTo !== Infinity) {
        throw errors.rangeGap(lastRangeTo, Infinity);
    }

    if (arr.length === 1) return;

    for (let i = 1; i < arr.length; i++) {
        const previous = arr[i - 1];
        const current = arr[i];

        const [currentFrom] = current;
        const [, previousTo] = previous;

        if (previousTo >= currentFrom) {
            throw errors.overlap(previous, current);
        }

        if (previousTo !== currentFrom - 1) {
            throw errors.rangeGap(previousTo, currentFrom);
        }
    }
};
