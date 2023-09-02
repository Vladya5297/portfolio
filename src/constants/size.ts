import {getValidIndex} from '~/utils/getValidIndex';

const sizes = ['s', 'm', 'l'] as const;
type SizeType = typeof sizes[number];

export class Size {
    private value: SizeType;
    private index: number;

    constructor(value: SizeType) {
        this.value = value;
        this.index = sizes.indexOf(value);
    }

    next() {
        const index = getValidIndex(this.index + 1, sizes);
        const value = sizes[index];

        return new Size(value);
    }

    prev() {
        const index = getValidIndex(this.index - 1, sizes);
        const value = sizes[index];

        return new Size(value);
    }

    [Symbol.toPrimitive]() {
        return this.value;
    }
}

export const SIZE = {
    S: new Size('s'),
    M: new Size('m'),
    L: new Size('l'),
};
