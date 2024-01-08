import {head, tail} from '~/utils/toolkit';

import type {CtrValues} from '../constructor/types';

import type {HookParams} from './types';

export const getIndexRange = <T extends CtrValues>(
    params: HookParams<T>,
    labels: ReadonlyArray<keyof T>,
): readonly [number, number] => {
    let from: keyof T;
    let to: keyof T;

    if (typeof params === 'object') {
        from = params.from ?? head(labels);
        to = params.to ?? tail(labels);
    } else {
        from = params;
        to = params;
    }

    const range = [
        labels.indexOf(from),
        labels.indexOf(to),
    ] as const;

    if (head(range) > tail(range)) {
        throw new Error(`Given breakpoint "${String(from)}" is greater than "${String(to)}"`);
    }

    return range;
};
