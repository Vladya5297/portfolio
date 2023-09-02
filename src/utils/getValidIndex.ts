export const getValidIndex = (index: number, arr: readonly unknown[]): number => {
    if (index < 0) return 0;
    if (index >= arr.length) return arr.length - 1;
    return index;
};
