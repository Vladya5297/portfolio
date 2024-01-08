type RangeTuple = readonly [number, number];

type Options = {
    /**
     * @example
     * 'start' from <= x < to
     * 'end'   from < x <= to
     * 'both'  from <= x <= to
     * 'none'  from < x < to
     *
     * @default 'both'
     */
    including?: 'start' | 'end' | 'both' | 'none';
};

export const inRange = (
    [from, to]: RangeTuple,
    x: number,
    options: Options = {},
): boolean => {
    const including = options.including ?? 'both';

    const inStart = including === 'start' || including === 'both' ? from <= x : from < x;
    const inEnd = including === 'end' || including === 'both' ? to >= x : to > x;

    return inStart && inEnd;
};
