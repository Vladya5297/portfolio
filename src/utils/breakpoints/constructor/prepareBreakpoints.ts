import type {BreakpointRange, CtrValues} from './types';

const sortRanges = (a: BreakpointRange, b: BreakpointRange): number => {
    const [aFrom] = a;
    const [bFrom] = b;

    return aFrom - bFrom;
};

type Result<T extends CtrValues> = {
    labels: Array<keyof T>;
    ranges: Array<BreakpointRange>;
};

export const prepareBreakpoints = <T extends CtrValues>(
    values: T,
): Result<T> => {
    const entries = Object.entries(values);
    entries.sort(([, a], [, b]) => sortRanges(a, b));

    const result = entries.reduce((acc, [key, value]) => {
        acc.labels.push(key);
        acc.ranges.push(value);

        return acc;
    }, {
        labels: [],
        ranges: [],
    } as Result<T>);

    return result;
};
