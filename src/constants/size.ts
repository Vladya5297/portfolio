import {getClosestIndex} from '~/utils/getClosestIndex';

const sizes = ['s', 'm', 'l'] as const;
type SizeType = typeof sizes[number];

export class Size {
    private value: SizeType;
    private index: number;

    constructor(value: SizeType) {
        this.value = value;
        this.index = sizes.indexOf(value);
    }

    next(): Size {
        const index = getClosestIndex(this.index + 1, sizes);
        const value = sizes[index];

        return new Size(value);
    }

    prev(): Size {
        const index = getClosestIndex(this.index - 1, sizes);
        const value = sizes[index];

        return new Size(value);
    }

    [Symbol.toPrimitive](): SizeType {
        return this.value;
    }
}

export const SIZE = {
    S: new Size('s'),
    M: new Size('m'),
    L: new Size('l'),
};
